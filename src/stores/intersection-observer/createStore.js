import { writable } from "svelte/store";

const initialState = {
  entries: []
};

export default (options = {}) => {
  const { subscribe, set } = writable(initialState);
  const observer = new IntersectionObserver(x => {
    let entries = [];
    x.forEach(y => {
      console.log(y.target);
      const z = { isIntersecting: y.isIntersecting };
      entries.push(z);
    }, options);
    // console.log({ entries });
    set(entries);
  });
  return {
    subscribe,
    observe: node => {
      observer.observe(node);
    }
  };
};
