import { writable } from "svelte/store";

export default (initialState = false) => {
  const { subscribe, set, update } = writable(initialState);
  return {
    subscribe,
    toggle: () => update(st => !st),
    on: () => set(true),
    off: () => set(false)
  };
};
