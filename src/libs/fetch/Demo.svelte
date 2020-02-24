<script context="module">
  import createFetchStore from "./createStore";
  const url = "https://api.github.com/users/collardeau";
  const store = createFetchStore(url);
</script>

<script>
  import Store from "../../demo/Store.svelte";
  $: console.log($store);
</script>

<p>passing in: https://api.github.com/users/collardeau.</p>

<Store {store} />

<style>
  p {
    margin: var(--gap-2) 0;
  }
</style>
