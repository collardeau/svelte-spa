import About from "./components/About.svelte";
import Home from "./components/Home.svelte";
import KitchenSink from "./demo/KitchenSink.svelte";
import Page from "./components/Page.svelte";

export function match({ route }) {
  switch (route) {
    case "about":
      return About;
    case "kitchen-sink":
      return KitchenSink;
    case "new-page":
      return Page;
    default:
      return Home;
  }
}
