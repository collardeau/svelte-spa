import { initStore } from "../stores";

const initialState = { loading: false, data: null };

export default (name = "", uri = "") => {
  if (!uri) throw new Error("missing url paramater to create a fetch store");

  const customize = ({ subscribe, set, update }) => {
    return {
      subscribe,
      get: async (onData = x => x) => {
        update(st => ({ ...st, loading: true }));
        let effect = async () => await fetchJson(uri);
        if (uri.mock) {
          effect = async () => await delay(() => uri.mock, uri.mock.latency);
        }
        const res = (await effect()) || {};
        const state = { data: onData(res), loading: false, ts: Date.now() };
        set(state);
        return state;
      }
    };
  };

  return initStore(name, initialState, customize);
};

async function fetchJson(uri = "") {
  // console.warn("making a fetch request");
  let data;
  try {
    let res = await fetch(uri);
    if (!res.ok) throw new Error();
    data = await res.json();
  } catch (err) {
    console.warn(`bad request for ${uri}`);
    // console.warn(err);
  }
  return data;
}

function delay(fn, duration = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fn());
    }, duration);
  });
}
