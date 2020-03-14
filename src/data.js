import About from "./pages/About.svelte";
import Intro from "./pages/Intro.svelte";
import Stores from "./pages/Stores.svelte";
import Comps from "./pages/Comps.svelte";
import Gallery from "./pages/Gallery.svelte";
import Bool from "./lib/custom-stores/bool/Demo.svelte";
import Cycle from "./lib/custom-stores/cycle/Demo.svelte";
import ModalDemo from "./lib/components/demo/ModalDemo.svelte";
import YouTubeDemo from "./lib/components/demo/YouTubeDemo.svelte";

export const data = {
  comp: Intro,
  slug: "",
  children: [
    {
      comp: Stores,
      slug: "stores",
      children: [
        {
          slug: "bool",
          comp: Bool
        },
        {
          slug: "cycle",
          comp: Cycle
        }
      ]
    },
    {
      comp: Comps,
      slug: "components",
      children: [
        {
          slug: "modal",
          comp: ModalDemo
        },
        {
          slug: "youtube",
          comp: YouTubeDemo,
          defer: true
        },
        {
          slug: "gallery",
          comp: Gallery,
          defer: true
        }
      ]
    },
    {
      comp: About,
      slug: "about"
    }
  ]
};
