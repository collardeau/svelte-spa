import { writable } from "svelte/store";

const stores = {};

export function initStore(name = "", initialState = null, customize = x => x) {
  if (!name) {
    throw new Error("you need to pass a name to create a store");
  }
  if (stores[name]) {
    throw new Error(`the store "${name}" already exists`);
  }
  const store = writable(initialState);
  store.merge = xs => {
    store.update(st => {
      if (isArray(st) && isArray(xs)) {
        return [...st, ...xs];
      }
      if (isObj(st) && isObj(xs)) {
        return { ...st, ...xs };
      }
      console.warn(`cannot merge ${xs} into ${st}`);
      return st;
    });
  };
  const customStore = customize(store, initialState);
  stores[name] = customStore;
  return customStore;
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

function isObj(a) {
  return !!a && a.constructor === Object;
}

function isArray(a) {
  return Array.isArray(a);
}
