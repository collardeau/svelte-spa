import { initStore } from "../stores";

const initialState = { loading: false, ts: 0, data: null };

export default (name = "") => {
  const storage = localStorage;
  const customize = ({ subscribe, set }) => {
    return {
      // set: newState => {
      //   const toStore = {
      //     data: newState,
      //     ts: Date.now(),
      //     loading: false
      //   };
      //   const item = JSON.stringify(toStore);
      //   storage.setItem(name, item);
      //   set();
      // },
      subscribe: fn => {
        const data = storage.getItem(name);
        subscribe(() => fn(JSON.parse(data)));
        return () => {};
      }
    };
  };

  return initStore(name, initialState, customize);
};
