import { writable } from "svelte/store";

const stores = {};

export function createStore(name, state, extend = () => ({})) {
  if (!name) {
    throw new Error("you need to pass a name to create a store");
  }
  if (stores[name]) {
    console.warn(`the store "${name}" already exists`);
    return stores[name];
  }
  const defaultStore = writable(state);
  const store = { ...defaultStore, ...extend(defaultStore) };
  stores[name] = store;
  return store;
}

export function getStore(name = "") {
  if (!name) {
    throw new Error(`the function getStore requires a name (string)`);
  }
  const store = stores[name];
  if (!store) {
    throw new Error(`Store named "${name}" does not exist.`);
  }
  return store;
}
