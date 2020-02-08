<script context="module">
  import createStore from "./createStore";
  createStore("router");
</script>

<script>
  import { getStore } from "../stores";
  const store = getStore("router");
  // $: console.log("demo hash-router state: ", $store);
  $: route = $store.route || "home";
</script>

<nav>
  <a href="#/">Home</a>
  |
  <a href="#/page-1">Page 1</a>
</nav>

<div>current route: {route}</div>
