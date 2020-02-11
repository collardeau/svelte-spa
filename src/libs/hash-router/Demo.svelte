<script context="module">
  // this app already uses and sets up the router
  // import createStore from "./createStore";
  // createStore("app-router");
</script>

<script>
  import { getStore } from "../stores";

  const store = getStore("app-router");
  $: route = $store.route || "home";
</script>

<div>Current hash route: {route}</div>
