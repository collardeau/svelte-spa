import { initStore } from "../stores";

const initialState = { uid: "" };

export default (name = "", firebaseAuth) => {
  const customize = ({ subscribe, set }) => {
    firebaseAuth &&
      firebaseAuth.onAuthStateChanged(response => {
        if (!response) {
          set({ uid: "" });
          firebaseAuth.signInAnonymously().catch(console.warn);
        } else {
          set({ uid: response.uid });
        }
      });

    return {
      subscribe
    };
  };
  return initStore(name, initialState, customize);
};
