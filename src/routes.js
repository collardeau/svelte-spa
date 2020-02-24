import About from "./components/pages/About.svelte";
import Home from "./components/pages/Home.svelte";
import Page from "./components/pages/Page.svelte";
import Stores from "./demo/Stores.svelte";

export function match({ route }) {
  switch (route) {
    case "stores-demo":
      return Stores;
    case "about":
      return About;
    case "page-1":
      return Page;
    default:
      return Home;
  }
}
