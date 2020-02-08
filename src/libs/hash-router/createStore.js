import { initStore } from "../stores";

const createState = () => {
  const hash = window.location.hash;
  const [route, ...params] = hash.replace(/^#\/?|\/$/g, "").split("/");
  return {
    hash,
    route,
    params
  };
};

const customize = ({ subscribe, set }) => {
  window.onhashchange = () => {
    set(createState());
  };
  return {
    subscribe
  };
};

export default name => initStore(name, createState(), customize);
