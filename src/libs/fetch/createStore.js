import { writable } from "svelte/store";

const initialState = { loading: false, data: {} };

export default (uri = "") => {
  if (!uri) throw new Error("missing url paramater to create a fetch store");
  const { subscribe, set, update } = writable(initialState);
  return {
    subscribe,
    get: async () => {
      update(st => ({ ...st, loading: true }));
      let effect = async () => await fetchJson(uri);
      const data = (await effect()) || {};
      const state = { data, loading: false, ts: Date.now() };
      set(state);
      return state;
    }
  };
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
