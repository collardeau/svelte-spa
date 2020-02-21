import About from "./components/About.svelte";
import Home from "./components/Home.svelte";
import KitchenSink from "./demo/KitchenSink.svelte";
import Blog from "./components/Blog.svelte";
import Target from "./components/Target.svelte";

export const routes = [
  {
    href: "#/blog",
    name: "Blog",
    route: "blog"
  },
  {
    href: "#/about",
    name: "About",
    route: "about"
  }
];

export function match({ route }) {
  switch (route) {
    case "about":
      return About;
    case "kitchen-sink":
      return KitchenSink;
    case "blog":
      return Blog;
    case "target":
      return Target;
    default:
      return Home;
  }
}
