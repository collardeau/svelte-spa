import { initStore } from "../stores";

export default (name = "", inputs = []) => {
  if (!inputs.length) {
    return console.warn(
      `please pass in a inputs array to create a form store, for example:
      createStore("my-form", [{ name: "name", type: "text", defaultValue: ""}]);
      `
    );
  }

  const defaultValues = inputs.reduce(
    (acc, { name, defaultValue }) => ({
      ...acc,
      [name]: defaultValue
    }),
    {}
  );

  const customizeStore = ({ subscribe, set, update, merge }) => {
    return {
      inputs,
      subscribe,
      set,
      merge,
      reset: () => set(defaultValues),
      sanitize: () =>
        update(state => {
          const newState = { ...state };
          for (const prop in newState) {
            const val = newState[prop];
            if (typeof val === "string") {
              newState[prop] = val.trim();
            }
            // todo: if it's a number +val
          }
          return newState;
        })
    };
  };

  initStore(name, defaultValues, customizeStore);
};
