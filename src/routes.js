import About from "./components/pages/About.svelte";
import Home from "./components/pages/Home.svelte";
import Page from "./components/pages/Page.svelte";

export function match({ route }) {
  switch (route) {
    case "about":
      return About;
    case "page-1":
      return Page;
    default:
      return Home;
  }
}

export const navLinks = [
  {
    name: "page 1",
    slug: "page-1"
  },
  {
    name: "about",
    slug: "about"
  }
];
