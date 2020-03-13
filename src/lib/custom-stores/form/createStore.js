import { writable } from "svelte/store";

// createStore([
//   {
//     name: "name",
//     defaultValue: " some name    "
//   }
// ]);

export default (inputs = []) => {
  if (!inputs.length) {
    return console.warn(
      `please pass in a inputs array to create a form store, for example:
      createStore("[{ key: "value", defaultValue: ""}]);
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

  const { subscribe, set, update } = writable(defaultValues);
  return {
    subscribe,
    update,
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
