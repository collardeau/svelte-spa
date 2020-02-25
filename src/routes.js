import About from "./components/pages/About.svelte";
import Home from "./components/pages/Home.svelte";
import Videos from "./components/pages/Videos.svelte";
import Page from "./components/pages/Page.svelte";
import Stores from "./components/pages/Stores.svelte";
import Comps from "./components/pages/Components.svelte";

export function match({ route }) {
  switch (route) {
    case "about":
      return About;
    case "page-1":
      return Page;
    case "stores":
      return Stores;
    case "components":
      return Comps;
    case "videos":
      return Videos;
    default:
      return Home;
  }
}
