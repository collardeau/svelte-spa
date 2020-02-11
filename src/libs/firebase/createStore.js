import { initStore } from "../stores";

export default (name = "", collection) => {
  if (!collection) {
    return console.warn(
      `please pass in a collection to create a firebase store, for example:
      createStore("my-data", db.collection("my-data"));
      `
    );
  }
  let initialState = { data: [], loading: false };
  const customize = ({ subscribe, set, update }) => ({
    subscribe,
    get: async () => {
      update(st => ({ ...st, loading: true }));
      const snap = await collection.get();
      let data = [];
      snap.forEach(doc => {
        data.push({ ...doc.data(), _id: data.id });
      });
      set({ data, loading: false });
    }
  });
  return initStore(name, initialState, customize);
};
