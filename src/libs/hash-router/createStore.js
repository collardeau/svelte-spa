import { writable } from "svelte/store";

const initialState = {
  on: false,
  route: "",
  params: []
};

const createState = () => {
  const hash = window.location.hash;
  const [route, ...params] = hash.replace(/^#\/?|\/$/g, "").split("/");
  return {
    route,
    params
  };
};

export default () => {
  const { subscribe, set, update } = writable(initialState);
  return {
    subscribe,
    start: () => {
      set({ ...createState(), on: true });
      window.onhashchange = () => {
        update(st => ({ ...st, ...createState() }));
      };
    },
    stop: () => {
      window.onhashchange = () => {};
      update(st => ({ ...st, on: false }));
    }
  };
};
