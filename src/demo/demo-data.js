import BoolDemo from "../libs/modal/Demo.svelte";
import RouterDemo from "../libs/hash-router/Demo.svelte";
import FirebaseDemo from "../libs/firebase/Demo.svelte";
// import SwiperDemo from "../libs/swiper/Demo.svelte";
// import FormDemo from "../libs/form/Demo.svelte";
// import TabsDemo from "../libs/tabs/Demo.svelte";
// import FirebaseAuthDemo from "../libs/firebase-auth/Demo.svelte";
// import LocalStorageDemo from "../libs/local-storage/Demo.svelte";
// also local storage and fetch
// todo: rename modal folder to boolean
export const demos = [
  {
    title: "Boolean",
    comp: BoolDemo,
    href:
      "https://github.com/collardeau/svelte-spa/blob/master/src/libs/modal/Demo.svelte"
  },
  {
    title: "Hash Router",
    comp: RouterDemo,
    href:
      "https://github.com/collardeau/svelte-spa/blob/master/src/libs/hash-router/Demo.svelte"
  },
  {
    title: "Firestore",
    comp: FirebaseDemo,
    // rename libs firestore from firebase
    href:
      "https://github.com/collardeau/svelte-spa/blob/master/src/libs/firebase/Demo.svelte"
  }
  // {
  //   title: "Firebase Auth",
  //   comp: FirebaseAuthDemo,
  //   href:
  //     "https://github.com/collardeau/svelte-spa/blob/master/src/libs/firebase-auth/Demo.svelte"
  // },
  // {
  //   title: "Form",
  //   comp: FormDemo,
  //   href:
  //     "https://github.com/collardeau/svelte-spa/blob/master/src/libs/form/Demo.svelte"
  // },
  // {
  //   title: "localStorage",
  //   comp: LocalStorageDemo,
  //   href:
  //     "https://github.com/collardeau/svelte-spa/blob/master/src/libs/local-storage/Demo.svelte"
  // },

  // tabs is just a regular store, just make a tab component then
  // {
  //   title: "Tabs",
  //   comp: TabsDemo,
  //   href:
  //     "https://github.com/collardeau/svelte-spa/blob/master/src/libs/tabs/Demo.svelte"
  // }
  // swiper is an integration, not a store
  // {
  //   title: "Swiper",
  //   comp: SwiperDemo,
  //   href:
  //     "https://github.com/collardeau/svelte-spa/blob/master/src/libs/swiper/Demo.svelte"
  // }
];
