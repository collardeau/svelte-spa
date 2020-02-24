import Bool from "../libs/bool/Demo.svelte";
import Router from "../libs/hash-router/Demo.svelte";
// import Firestore from "../libs/firebase/firestore/Demo.svelte";
// import FirebaseAuth from "../libs/firebase/firebase-auth/Demo.svelte";
// import FetchDemo from "../libs/fetch/Demo.svelte";
// import FormDemo from "../libs/form/Demo.svelte";

export const demos = [
  {
    title: "Boolean",
    comp: Bool,
    href:
      "https://github.com/collardeau/svelte-spa/blob/master/src/libs/bool/Demo.svelte"
  },
  {
    title: "Route",
    comp: Router,
    href:
      "https://github.com/collardeau/svelte-spa/blob/master/src/libs/hash-router/Demo.svelte"
  }
  // {
  //   title: "Fetch",
  //   comp: FetchDemo,
  //   href:
  //     "https://github.com/collardeau/svelte-spa/blob/master/src/libs/fetch/Demo.svelte"
  // }
  // {
  //   title: "Firestore",
  //   comp: Firestore,
  //   href:
  //     "https://github.com/collardeau/svelte-spa/blob/master/src/libs/firebase/firestore/Demo.svelte"
  // },
  // {
  //   title: "Firebase Auth",
  //   comp: FirebaseAuth,
  //   href:
  //     "https://github.com/collardeau/svelte-spa/blob/master/src/libs/firebase/firebase-auth/Demo.svelte"
  // }
  // {
  //   title: "Form",
  //   comp: FormDemo,
  //   href:
  //     "https://github.com/collardeau/svelte-spa/blob/master/src/libs/form/Demo.svelte"
  // }
];
