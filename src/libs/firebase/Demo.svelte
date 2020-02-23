<script context="module">
  import Store from "../../demo/Store.svelte";
  import { db } from "../../firebase"; // see this file for setup
  import createStore from "./createStore";

  const store = createStore(db.collection("my-collection-name"));
</script>

<Store {store} />
