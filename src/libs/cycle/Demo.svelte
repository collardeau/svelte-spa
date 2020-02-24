<script context="module">
  import createStore from "./createStore";
  import Store from "../../demo/Store.svelte";
  const store = createStore([{ a: "thing" }, { a: "marvel" }]);
</script>

<Store {store} />
