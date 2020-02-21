import About from "./components/About.svelte";
import Home from "./components/Home.svelte";
import KitchenSink from "./demo/KitchenSink.svelte";
import Page from "./components/Page.svelte";

export function match({ route }) {
  switch (route) {
    case "kitchen-sink":
      return KitchenSink;
    case "about":
      return About;
    case "page-1":
      return Page;
    default:
      return Home;
  }
}
