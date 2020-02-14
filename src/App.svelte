<script context="module">
  import "./css/theme.css";
  import "./css/global.css";
  import createRouterStore from "./libs/hash-router/createStore";
  import createAuthStore from "./libs/firebase-auth/createStore";
  import { firebaseAuth } from "./firebase";

  const router = createRouterStore("app-router");
  const auth = createAuthStore("auth", firebaseAuth);
</script>

<script>
  import Layout from "./components/Layout.svelte";
  import About from "./components/About.svelte";
  import Home from "./components/Home.svelte";
  import KitchenSink from "./demo/KitchenSink.svelte";

  $: route = $router.route;
  $: compToRender =
    route === "about" ? About : route === "kitchen-sink" ? KitchenSink : Home;
</script>

<Layout>
  <svelte:component this={compToRender} />
</Layout>
