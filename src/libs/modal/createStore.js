import { createStore } from "../stores";

const initialState = { isOpen: false };

const extend = ({ set }) => ({
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false })
});

const createModalStore = (name = "", state = initialState) =>
  createStore(name, state, extend);

export default createModalStore;
