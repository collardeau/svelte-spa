import About from "./components/About.svelte";
import Home from "./components/Home.svelte";
import Page from "./components/Page.svelte";
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
