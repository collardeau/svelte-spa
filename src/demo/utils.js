export function stringify(obj) {
  const string = JSON.stringify(obj, null, 2);
  return string;
  // remove surrounding bracket and spacing
  // return string.substring(2, string.length - 2);
}

export function getActions(store = {}) {
  return Object.keys(store)
    .filter(key => key !== "subscribe" && key !== "set" && key !== "update")
    .map(key => store[key]);
}
