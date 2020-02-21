import About from "./components/About.svelte";
import Home from "./components/Home.svelte";
import KitchenSink from "./demo/KitchenSink.svelte";
import Blog from "./components/Blog.svelte";
import Page from "./components/Page.svelte";

export function match({ route }) {
  switch (route) {
    case "kitchen-sink":
      return KitchenSink;
    case "about":
      return About;
    case "blog":
      return Blog;
    case "work-1":
    case "work-2":
    case "work-3":
    case "project-1":
    case "project-2":
    case "project-3":
      return Page;
    default:
      return Home;
  }
}
