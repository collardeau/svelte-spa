import { initStore } from "../stores";

const initialState = { data: [], loading: false };

export default (name = "", collection) => {
  if (!collection) {
    return console.warn(
      `please pass in a collection to create a firebase store, for example:
      createStore("my-data", db.collection("my-data"));
      `
    );
  }

  let customize;
  const { mock } = collection;
  if (collection.mock) {
    customize = ({ subscribe, set, update }) => ({
      subscribe,
      get: async () => {
        update(st => ({ ...st, loading: true }));
        const data = await delay(() => mock);
        set({ data, loading: false });
      }
    });
  } else {
    customize = ({ subscribe, set, update }) => ({
      subscribe,
      get: async () => {
        update(st => ({ ...st, loading: true }));
        const snap = await collection.get();
        let data = [];
        snap.forEach(doc => {
          data.push({ ...doc.data(), _id: doc.id });
        });
        set({ data, loading: false });
      }
    });
  }
  return initStore(name, initialState, customize);
};

// for mocking
function delay(fn, duration = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fn());
    }, duration);
  });
}
