<script context="module">
  import createStore from "./createStore";
  createStore("router");
</script>

<script>
  import { getStore } from "../stores";
  const store = getStore("router");
  // $: console.log("demo hash-router state: ", $store);
</script>

<nav>
  <a href="#/">Home</a>
  |
  <a href="#/page-1">Page 1</a>
</nav>

<div style="margin-top: 0.5rem;">current route: {$store.route || 'home'}</div>
