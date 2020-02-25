<script context="module">
  import createAuthStore from "./createStore";
  import { firebaseAuth } from "../config";
  import Store from "../../../demo/Store.svelte";

  const store = createAuthStore(firebaseAuth);
</script>

<Store {store} />
