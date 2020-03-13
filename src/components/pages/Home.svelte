<script context="module">
  import Tiles from "../layout/Tiles.svelte";
  import About from "./About.svelte";
  import Intro from "./demos/Intro.svelte";
  import Stores from "./demos/Stores.svelte";
  import Comps from "./demos/Comps.svelte";
  import Bool from "../../stores/bool/Demo.svelte";
  import Cycle from "../../stores/cycle/Demo.svelte";
  import ModalDemo from "../lib/ModalDemo.svelte";

  const data = {
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
          }
        ]
      },
      {
        comp: About,
        slug: "about"
      }
    ]
  };
</script>

<Tiles {...data} />
