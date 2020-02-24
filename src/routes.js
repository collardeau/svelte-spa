import About from "./components/pages/About.svelte";
import Home from "./components/pages/Home.svelte";
import Videos from "./components/pages/Videos.svelte";
import Page from "./components/pages/Page.svelte";
import StoresDemo from "./demo/StoresDemo.svelte";
import CompsDemo from "./demo/CompsDemo.svelte";

export function match({ route }) {
  switch (route) {
    case "about":
      return About;
    case "page-1":
      return Page;
    case "videos":
      return Videos;
    case "stores-demo":
      return StoresDemo;
    case "components-demo":
      return CompsDemo;
    default:
      return Home;
  }
}
