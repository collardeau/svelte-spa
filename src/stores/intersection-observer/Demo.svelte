<script>
  import createStore from "./createStore";
  import Store from "../../components/lib/Store.svelte";

  // todo: update
  let store = createStore();

  function action(node) {
    store.observe(node);
  }
</script>

<p class="foo" use:action>createStore()</p>
<Store {store} />

<style>
  * {
    border: 1px solid;
  }
</style>
