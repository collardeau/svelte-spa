import ModalDemo from "../libs/modal/Demo.svelte";
import RouterDemo from "../libs/hash-router/Demo.svelte";
import SwiperDemo from "../libs/swiper/Demo.svelte";
import FormDemo from "../libs/form/Demo.svelte";
import TabsDemo from "../libs/tabs/Demo.svelte";
import FirebaseDemo from "../libs/firebase/Demo.svelte";
import FirebaseAuthDemo from "../libs/firebase-auth/Demo.svelte";

export const integrations = [
  {
    title: "Firebase Auth",
    comp: FirebaseAuthDemo,
    href:
      "https://github.com/collardeau/svelte-spa/blob/master/src/libs/firebase-auth/Demo.svelte"
  },
  {
    title: "Firestore",
    comp: FirebaseDemo,
    // rename libs firestore from firebase
    href:
      "https://github.com/collardeau/svelte-spa/blob/master/src/libs/firebase/Demo.svelte"
  },
  {
    title: "Swiper",
    comp: SwiperDemo,
    href:
      "https://github.com/collardeau/svelte-spa/blob/master/src/libs/swiper/Demo.svelte"
  }
];

export const customStores = [
  {
    title: "Router",
    comp: RouterDemo,
    href:
      "https://github.com/collardeau/svelte-spa/blob/master/src/libs/hash-router/Demo.svelte"
  },
  {
    title: "Tabs",
    comp: TabsDemo,
    href:
      "https://github.com/collardeau/svelte-spa/blob/master/src/libs/tabs/Demo.svelte"
  },
  {
    title: "Form",
    comp: FormDemo,
    href:
      "https://github.com/collardeau/svelte-spa/blob/master/src/libs/form/Demo.svelte"
  },
  {
    title: "Modal",
    comp: ModalDemo,
    href:
      "https://github.com/collardeau/svelte-spa/blob/master/src/libs/modal/Demo.svelte"
  }
];
