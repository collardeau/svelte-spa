<script>
  import { getContext } from "svelte";
  import Tile from "./Tile.svelte";

  export let children = [];
  export let comp;
  export let slug;
  export let data = {};
  export let docRef = null;
  export let crumbs = [];
  export let row = true;
  export let defer = 0;

  let id; // id is used as hash route
  let newCrumbs = [];
  if (!crumbs.length) {
    id = slug;
    newCrumbs = [id];
  } else {
    id = crumbs.join("/") + "/" + slug;
    newCrumbs = [...crumbs, slug];
  }

  const obs$ = getContext("intersection-observer");

  const action = node => {
    obs$.observe(node);
    return {
      destroy() {
        console.log("todo: unobserve");
      }
    };
  };
</script>

<div class={row ? 'row' : 'col'}>
  <div {id} use:action>
    <Tile {id} {defer}>
      <svelte:component this={comp} {...data} {docRef} />
    </Tile>
  </div>
  {#if children.length}
    {#each children as item}
      <svelte:self {...item} row={!row} crumbs={newCrumbs} />
    {/each}
  {/if}
</div>

<style>
  .col,
  .row {
    display: grid;
    grid-auto-rows: 100%;
    grid-auto-columns: 100%;
    height: 100%;
    width: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }

  .col {
    scroll-snap-type: y mandatory;
  }
  .row {
    grid-auto-flow: column;
    scroll-snap-type: x mandatory;
  }
  .col > *,
  .row > * {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
</style>
