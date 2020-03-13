<script>
  export let store;

  function stringify(obj) {
    const string = JSON.stringify(obj, null, 2);
    return string;
  }

  function getActions(store = {}) {
    return Object.keys(store)
      .filter(key => key !== "subscribe" && key !== "set" && key !== "update")
      .map(key => store[key]);
  }

  const actions = getActions(store);

  $: state = stringify($store);
</script>

<div>
  <pre>{state}</pre>
  {#each actions as action}
    <button on:click={e => action()}>{action.name}</button>
  {/each}
</div>

<style>
  pre {
    background-color: var(--white);
    color: var(--black);
    padding: var(--gap-2);
    margin-bottom: var(--gap-3);
    /* min-width: var(--size-8); */
  }
</style>
