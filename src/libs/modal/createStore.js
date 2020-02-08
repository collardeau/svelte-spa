import { initStore } from "../stores";

const initialState = { isOpen: false };

const customize = ({ subscribe, set }) => ({
  subscribe,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false })
});

export default (name = "") => initStore(name, initialState, customize);
