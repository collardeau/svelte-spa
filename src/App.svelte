<script context="module">
  import createRouterStore from "./libs/hash-router/createStore";
  const routerStore = createRouterStore("app-router");
</script>

<script>
  import "./global.css";
  import KitchenSink from "./components/KitchenSink.svelte";
  import Home from "./components/Home.svelte";

  $: route = $routerStore.route;
  $: component = route === "kitchen-sink" ? KitchenSink : Home;
</script>

<style>
  main {
    max-width: 960px;
    margin: 0 auto;
    padding: 1rem;
  }
</style>

<main>
  <svelte:component this={component} />
</main>
