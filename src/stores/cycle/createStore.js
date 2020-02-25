import { writable } from "svelte/store";

export default items => {
  const { subscribe, update } = writable({
    index: 0,
    item: items[0]
  });

  const next = () => {
    update(st => {
      const index = cycle(st);
      return { ...st, index, item: items[index] };
    });
  };
  return {
    subscribe,
    next
  };

  function cycle(st) {
    const { index } = st;
    if (!items.length) return 0; // -1?
    if (index === items.length - 1) {
      return 0;
    }
    return index + 1;
  }
};
