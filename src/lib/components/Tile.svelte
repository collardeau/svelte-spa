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

<div class="tile">
  {#if !hide}
    <slot />
  {/if}
</div>

<style>
  .tile {
    height: 100%;
  }
</style>
