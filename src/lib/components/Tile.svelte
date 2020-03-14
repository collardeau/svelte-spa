<script>
  import { getContext } from "svelte";
  export let id;
  export let defer = false;

  const obs$ = getContext("intersection-observer");
  $: intersecting = $obs$.intersecting[0] === id;

  let hide = defer;
  $: {
    if (hide && intersecting) hide = false;
  }
</script>

{#if !hide}
  <div class="tile">
    <slot />
  </div>
{/if}

<style>
  .tile {
    display: grid;
    place-items: center;
    height: 100%;
  }
</style>
