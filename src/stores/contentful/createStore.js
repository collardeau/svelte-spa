import { writable } from "svelte/store";
import { client } from "./config";

const initialState = { loading: false, data: {} };

// example options: {content_type: "songs", limit: 3 }
// https://www.contentful.com/developers/docs/references/content-delivery-api/

export default (opts = {}, shape = x => x) => {
  const { subscribe, set, update } = writable(initialState);
  const get = async () => {
    update(st => ({ ...st, loading: true }));
    // console.log("making a contentful request");
    const res = await client.getEntries(opts);
    let data = res.items.map(item => item.fields);
    data = shape(data);
    const state = { data, loading: false, ts: Date.now() };
    set(state);
    return state;
  };
  return {
    subscribe,
    get,
    useStorage: async (name = "contentful", validate = () => true) => {
      const stored = JSON.parse(localStorage.getItem(name));
      if (stored && validate(stored)) {
        set(stored);
      } else {
        const state = await get();
        localStorage.setItem(name, JSON.stringify(state));
      }
    }
  };
};
