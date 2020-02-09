<script context="module">
  import createStore from "./createStore";

  createStore("router");
</script>

<script>
  import { getStore } from "../stores";

  const store = getStore("router");
  $: route = $store.route || "home";
</script>

<nav>
  <a href="#/">Home</a>
  |
  <a href="#/page-1">Page 1</a>
</nav>

<div>current route: {route}</div>
