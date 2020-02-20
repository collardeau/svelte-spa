import About from "./components/About.svelte";
import Home from "./components/Home.svelte";
import KitchenSink from "./demo/KitchenSink.svelte";
import Page from "./components/Page.svelte";
import BlogPage from "./components/BlogPage.svelte";
import Target from "./components/Target.svelte";

export function match({ route }) {
  switch (route) {
    case "about":
      return About;
    case "kitchen-sink":
      return KitchenSink;
    case "blog":
      return BlogPage;
    case "target":
      return Target;
    case "john-hong-studio":
    case "fade-in-films":
      return Page;
    default:
      return Home;
  }
}
