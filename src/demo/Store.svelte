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
