import { writable } from "svelte/store";

const initialState = { data: [], loading: false, ts: 0 };

// createFirestore(db.collection("my-data"));
export default collection => {
  check(collection);
  const { subscribe, set, update } = writable(initialState);
  return {
    subscribe,
    get: async () => {
      update(st => ({ ...st, loading: true }));
      const snap = await collection.get();
      let data = [];
      snap.forEach(doc => {
        data.push({ ...doc.data(), _id: doc.id });
      });
      const state = deriveState(data);
      set(state);
      return state;
    }
  };
};

function deriveState(data) {
  return { data, loading: false, ts: Date.now() };
}

function check(collection) {
  if (!collection) {
    throw new Error(
      `Cannot create a firestore store. Invalid collection parameter:
      ${collection}
      `
    );
  }
}
