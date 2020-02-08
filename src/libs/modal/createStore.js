import { createStore } from "../stores";

const initialState = { isOpen: false };

const customize = ({ subscribe, set }) => ({
  subscribe,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false })
});

const createModalStore = (name = "", state = initialState) =>
  createStore(name, state, customize);

export default createModalStore;
