<script context="module">
  import createStore from "./createStore";
  import Store from "../../demo/Store.svelte";
  const store = createStore(["item 1", "item 2", "item 3"]);
</script>

<div>createStore(["item 1", "item 2", "item 3"]);</div>
<Store {store} />
