<script>
  import createStore from "./createStore";
  import Store from "../../components/lib/Store.svelte";

  const store = createStore(["item 1", "item 2", "item 3"]);
</script>

<p>createStore(["item 1", "item 2", "item 3"])</p>
<Store {store} />
