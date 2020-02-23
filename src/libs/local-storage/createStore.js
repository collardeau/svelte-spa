import { writable } from "svelte/store";

const initialState = { loading: false, ts: 0 };

export default () => {
  const storage = localStorage;
  const { subscribe, set } = writable(initialState);
  return {
    set: state => {
      const item = JSON.stringify(state);
      storage.setItem(name, item);
      set(item);
    },
    // todo: get
    subscribe: fn => {
      const data = storage.getItem(name);
      subscribe(() => fn(JSON.parse(data)));
      return () => {
        console.log("unsub");
      };
    }
  };
};
