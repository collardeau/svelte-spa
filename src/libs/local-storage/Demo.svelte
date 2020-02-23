<script context="module">
  import createStore from "./createStore";
  import Store from "../../demo/Store.svelte";
  const store = createStore("data-name", "data");
  // todo
</script>

<Store {store} />
