import { writable } from "svelte/store";

const initialState = { loading: false, data: {} };

export default (uri = "", shape = x => x) => {
  if (!uri) throw new Error("missing url paramater to create a fetch store");
  const { subscribe, set, update } = writable(initialState);
  return {
    subscribe,
    get: async () => {
      update(st => ({ ...st, loading: true }));
      const res = await fetchJson(uri);
      const data = res ? shape(res) : {};
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
