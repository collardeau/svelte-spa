<script>
  import { stringify, getActions } from "../demo/utils";

  export let store;

  $: state = stringify($store);
  const actions = getActions(store);
</script>

<div>
  <pre>{state}</pre>
  {#each actions as action}
    <button on:click={action}>{action.name}</button>
  {/each}
</div>

<style>
  pre {
    background-color: var(--white);
    color: var(--black);
    padding: var(--gap-2);
    /* min-width: var(--size-8); */
  }
</style>
