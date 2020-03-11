<script context="module">
  import Tiles from "../layout/Tiles.svelte";
  import Intro from "./demos/Intro.svelte";
  import Stores from "./demos/Stores.svelte";
  import Comps from "./demos/Comps.svelte";
  import Bool from "../../stores/bool/Demo.svelte";
  import Cycle from "../../stores/cycle/Demo.svelte";
  import ModalDemo from "../lib/ModalDemo.svelte";

  const data = {
    comp: Intro,
    children: [
      {
        comp: Stores,
        children: [
          {
            comp: Bool
          },
          {
            comp: Cycle
          }
        ]
      },
      {
        comp: Comps,
        children: [
          {
            comp: ModalDemo
          }
        ]
      }
    ]
  };
</script>

<Tiles {...data} />
