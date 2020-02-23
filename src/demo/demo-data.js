import BoolDemo from "../libs/bool/Demo.svelte";
import RouterDemo from "../libs/hash-router/Demo.svelte";
// import FirebaseDemo from "../libs/firebase/Demo.svelte";
// import FetchDemo from "../libs/fetch/Demo.svelte";
// import FirebaseAuthDemo from "../libs/firebase-auth/Demo.svelte";
// import FormDemo from "../libs/form/Demo.svelte";
// import LocalStorageDemo from "../libs/local-storage/Demo.svelte";

export const demos = [
  {
    title: "Boolean",
    comp: BoolDemo,
    href:
      "https://github.com/collardeau/svelte-spa/blob/master/src/libs/bool/Demo.svelte"
  },
  {
    title: "Route",
    comp: RouterDemo,
    href:
      "https://github.com/collardeau/svelte-spa/blob/master/src/libs/hash-router/Demo.svelte"
  }
  // {
  //   title: "localStorage",
  //   comp: LocalStorageDemo,
  //   href:
  //     "https://github.com/collardeau/svelte-spa/blob/master/src/libs/local-storage/Demo.svelte"
  // },
  // {
  //   title: "Fetch",
  //   comp: FetchDemo,
  //   href:
  //     "https://github.com/collardeau/svelte-spa/blob/master/src/libs/fetch/Demo.svelte"
  // }
  // {
  //   title: "Firestore",
  //   comp: FirebaseDemo,
  //   href:
  //     "https://github.com/collardeau/svelte-spa/blob/master/src/libs/firebase/Demo.svelte"
  // }
  // {
  //   title: "Firebase Auth",
  //   comp: FirebaseAuthDemo,
  //   href:
  //     "https://github.com/collardeau/svelte-spa/blob/master/src/libs/firebase-auth/Demo.svelte"
  // }
  // {
  //   title: "Form",
  //   comp: FormDemo,
  //   href:
  //     "https://github.com/collardeau/svelte-spa/blob/master/src/libs/form/Demo.svelte"
  // }
];
