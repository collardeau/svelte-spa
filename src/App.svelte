<script context="module">
  import "./css/theme.css";
  import "./css/global.css";
  import createRouterStore from "./libs/hash-router/createStore";
  const router = createRouterStore("app-router");
</script>

<script>
  import Layout from "./components/Layout.svelte";
  import About from "./components/About.svelte";
  import Home from "./components/Home.svelte";
  import KitchenSink from "./components/KitchenSink.svelte";

  $: route = $router.route;
  $: compToRender =
    route === "about" ? About : route === "kitchen-sink" ? KitchenSink : Home;
</script>

<Layout>
  <svelte:component this={compToRender} />
</Layout>
