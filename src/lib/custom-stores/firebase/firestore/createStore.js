import { writable } from "svelte/store";
const initialState = { data: {}, loading: false, ts: 0 };

// example: createFirestore(db.collection("my-data"));
export default ref => {
  check(ref);
  const isCollection = true && ref._query;
  const { subscribe, set, update } = writable(initialState);
  return {
    subscribe,
    get: async () => {
      update(st => ({ ...st, loading: true }));
      let state = { loading: false, ts: Date.now() };
      if (isCollection) {
        const snap = await ref.get();
        state.data = processCollection(snap);
      } else {
        // https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
        const doc = await ref.get();
        state.data = processDoc(doc);
      }
      set(state);
      return state;
    },
    mock: (data = null, latency = 500) => {
      update(st => ({ ...st, loading: true }));
      setTimeout(() => {
        set({ data, loading: false, ts: Date.now() });
      }, latency);
    }
  };
};

function processCollection(snap) {
  const data = {};
  let i = 1;
  snap.forEach(doc => {
    data[doc.id] = { data: doc.data(), _id: doc.id, _order: i++ };
  });
  return data;
}

function processDoc(doc) {
  if (doc.exists) {
    return {
      ...doc.data()
    };
  } else {
    console.log("No such document!", doc.id);
    return {};
  }
}

function check(ref) {
  if (!ref) {
    throw new Error(
      `Cannot create a firestore store. Invalid firestore reference:
      ${ref}
      `
    );
  }
}
