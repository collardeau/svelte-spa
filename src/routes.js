import About from "./components/pages/About.svelte";
import Home from "./components/pages/Home.svelte";
import Page from "./components/pages/Page.svelte";
import StoresDemo from "./demo/StoresDemo.svelte";

export function match({ route }) {
  switch (route) {
    case "about":
      return About;
    case "page-1":
      return Page;
    case "stores-demo":
      return StoresDemo;
    default:
      return Home;
  }
}
