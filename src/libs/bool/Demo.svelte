<script context="module">
  import createBoolStore from "./createStore";
  import Store from "../../demo/Store.svelte";

  const store = createBoolStore();
</script>

<Store {store} />
