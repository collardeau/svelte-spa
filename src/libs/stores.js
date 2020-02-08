import { writable } from "svelte/store";

const stores = {};

export function createStore(name = "", state = null, customize = x => x) {
  if (!name) {
    throw new Error("you need to pass a name to create a store");
  }
  if (stores[name]) {
    throw new Error(`the store "${name}" already exists`);
  }
  const store = customize(writable(state));
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
