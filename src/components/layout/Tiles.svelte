<script>
  export let children = [];
  export let comp;
</script>

<div class="col">
  <div>
    <svelte:component this={comp} />
  </div>
  {#if children.length}
    <div class="row">
      {#each children as item}
        <svelte:self {...item} />
      {/each}
    </div>
  {/if}
</div>

<style>
  .col,
  .row {
    display: grid;
    grid-auto-rows: 100vh;
    grid-auto-columns: 100vw;
    height: 100vh;
    width: 100vw;
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
