<script context="module">
  import "./global.css";
  import createRouterStore from "./libs/hash-router/createStore";
  const routerStore = createRouterStore("app-router");
</script>

<script>
  import Layout from "./components/Layout.svelte";
  import KitchenSink from "./components/KitchenSink.svelte";
  import Home from "./components/Home.svelte";

  $: route = $routerStore.route || "home";
  $: component = route === "kitchen-sink" ? KitchenSink : Home;
</script>

<Layout {route}>
  <svelte:component this={component} />
</Layout>
