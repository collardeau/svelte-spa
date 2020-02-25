<script>
  import createStore from "./createStore";
  import Store from "../../components/lib/Store.svelte";

  const bool = createStore();
</script>

<p>createStore()</p>
<Store store={bool} />
