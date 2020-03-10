<script>
  export let children = [];
  export let content = "";
</script>

<div class="col">
  <div class="cell">{content}</div>
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

  .cell {
    display: grid;
    place-items: center;
    border: 1px solid grey;
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
