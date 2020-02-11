import { initStore } from "../stores";

export default (name = "", initialState = { selected: "" }) => {
  const customize = ({ subscribe, set }) => ({
    subscribe,
    set
  });
  return initStore(name, initialState, customize);
};
