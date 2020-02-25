import { writable } from "svelte/store";

const initialState = { user: null, loading: false, connected: false };

// createAuthStore(firebaseAuth);
export default auth => {
  check(auth);
  const { subscribe, set, update } = writable(initialState);
  let unsub = () => {};
  return {
    subscribe,
    start: () => {
      update(st => ({ ...st, loading: true }));
      unsub = auth.onAuthStateChanged(authData => {
        const user = !authData
          ? authData
          : {
              uid: authData.uid,
              isAnonymous: authData.isAnonymous
            };
        set({ user, loading: false, connected: true });
      });
    },
    stop: () => {
      unsub();
      update(st => ({ ...st, connected: false }));
    },
    login: () => {
      auth.signInAnonymously().catch(console.warn);
    },
    logout: () => {
      auth.signOut().catch(console.warn);
    }
  };
};

function check(auth) {
  if (!auth) {
    throw new Error(
      `Invalid firebase auth parameter:
      ${auth}
      `
    );
  }
}
