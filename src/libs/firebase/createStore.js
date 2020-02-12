import { initStore } from "../stores";

const initialState = { data: [], loading: false };

export default (name = "", collection) => {
  check(collection);
  let customize;
  const { mock, latency } = collection;
  if (collection.mock) {
    customize = ({ subscribe, set, update }) => ({
      subscribe,
      get: async () => {
        update(st => ({ ...st, loading: true }));
        const data = await delay(() => mock, latency);
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

function check(collection) {
  if (!collection) {
    throw new Error(
      `Cannot create a firebase store. Invalid collection parameter:
      ${collection}
      `
    );
  }
}
// for mocking
function delay(fn, duration = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fn());
    }, duration);
  });
}
