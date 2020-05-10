import { writable } from "svelte/store";

const initialState = {
  intersecting: []
};

export default (
  options = {
    threshold: 0.5
  },
  onIntersect = entry => {
    // location.hash = entry.target.id;
  }
) => {
  const { subscribe, set } = writable(initialState);

  const onChange = entries => {
    let intersecting = [];
    entries.forEach(e => {
      if (e.isIntersecting) {
        intersecting.push(e.target.id);
        onIntersect(e);
      }
    });
    set({ intersecting });
  };

  const observer = new IntersectionObserver(onChange, options);

  return {
    subscribe,
    observe: node => {
      observer.observe(node);
    },
    unobserve: node => {
      observer.unobserve(node);
    }
  };
};
