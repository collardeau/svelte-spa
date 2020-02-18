<script context="module">
  import createFetchStore from "./createStore";
  const url = "https://api.github.com/users/collardeau";
  const store = createFetchStore("api-data", url);
  // store.get();
</script>

<script>
  $: console.log($store);
</script>

<div>{$store}</div>
