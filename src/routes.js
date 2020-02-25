import About from "./components/pages/About.svelte";
import Home from "./components/pages/Home.svelte";
import Page from "./components/pages/Page.svelte";
import Stores from "./components/demo/Stores.svelte";
import Comps from "./components/demo/Comps.svelte";

export function match({ route }) {
  switch (route) {
    case "about":
      return About;
    case "page-1":
      return Page;
    // demo pages:
    case "stores":
      return Stores;
    case "components":
      return Comps;
    default:
      return Home;
  }
}
