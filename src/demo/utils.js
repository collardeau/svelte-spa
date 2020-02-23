export function stringify(obj) {
  const string = JSON.stringify(obj, null, 2);
  // remove surrounding bracket and spacing
  return string;
  return string.substring(2, string.length - 2);
}

export function getActions(store = {}) {
  // console.log("get actions");
  return Object.keys(store)
    .filter(key => key !== "subscribe")
    .map(key => store[key]);
}
