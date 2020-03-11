<script>
  export let children = [];
  export let comp;
  // export let data;
  export let row = false;
</script>

<div class={row ? 'row' : 'col'}>
  <div>
    <svelte:component this={comp} />
  </div>
  {#if children.length}
    {#each children as item}
      <svelte:self {...item} row={!row} />
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
