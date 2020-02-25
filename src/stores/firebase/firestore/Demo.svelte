<script context="module">
  import Store from "../../../demo/Store.svelte";
  import { db } from "../config"; // see this file for setup
  import createStore from "./createStore";

  const store = createStore(db.collection("my-data"));
</script>

<Store {store} />
