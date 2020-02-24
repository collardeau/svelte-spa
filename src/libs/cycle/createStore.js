import { writable } from "svelte/store";

export default items => {
  const { subscribe, update } = writable({
    items,
    active: 0,
    item: items[0]
  });

  const next = () => {
    update(st => {
      const active = cycle(st);
      return { ...st, active, item: st.items[active] };
    });
  };
  return {
    subscribe,
    next
  };
};

function cycle(st) {
  const { active, items } = st;
  if (!items.length) {
    return 0; // -1?
  }
  if (active === items.length - 1) {
    return 0;
  }
  return active + 1;
}
