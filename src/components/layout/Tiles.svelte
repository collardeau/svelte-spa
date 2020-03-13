<script>
  import { getContext } from "svelte";

  export let children = [];
  export let comp;
  export let slug;
  export let crumbs = [];
  export let row = true;

  let id, newCrumbs;
  // id is used as hash route
  if (!slug) {
    id = "home";
    newCrumbs = [];
  } else {
    if (!crumbs.length) {
      // make top level links '#stores' not '#home/stores'
      id = slug;
    } else {
      id = crumbs.join("/") + "/" + slug;
    }
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
    <svelte:component this={comp} />
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
