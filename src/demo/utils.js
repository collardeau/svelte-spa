export function stringify(obj) {
  const string = JSON.stringify(obj, null, 2);
  return string;
}

export function getActions(store = {}) {
  return Object.keys(store)
    .filter(key => key !== "subscribe" && key !== "set" && key !== "update")
    .map(key => store[key]);
}
