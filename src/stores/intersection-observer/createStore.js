import { writable } from "svelte/store";

const initialState = {
  intersecting: []
};

export default (
  options = {
    threshold: 0.8
  }
) => {
  const { subscribe, set } = writable(initialState);

  const onIntersect = entries => {
    let intersecting = [];
    entries.forEach(e => {
      if (e.isIntersecting) {
        intersecting.push(e.target.id);
      }
    });
    set({ intersecting });
  };

  const observer = new IntersectionObserver(onIntersect, options);
  // todo: unobserve

  return {
    subscribe,
    observe: node => {
      observer.observe(node);
    }
  };
};
