import { writable } from "svelte/store";
import { client } from "./config";

const initialState = { loading: false, data: {} };

// example options: {content_type: "songs", limit: 3 }
// https://www.contentful.com/developers/docs/references/content-delivery-api/

export default (opts = {}, shape = x => x) => {
  const { subscribe, set, update } = writable(initialState);
  return {
    subscribe,
    get: async () => {
      update(st => ({ ...st, loading: true }));
      const res = await client.getEntries(opts);
      let data = res.items.map(item => item.fields);
      data = shape(data);
      const state = { data, loading: false, ts: Date.now() };
      set(state);
    }
  };
};
