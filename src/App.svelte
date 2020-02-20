<script context="module">
  import "./css/reset.css";
  import "./css/theme.css";
  import "./css/global.css";
  import createRouterStore from "./libs/hash-router/createStore";

  const router = createRouterStore("app-router");
</script>

<script>
  import Layout from "./components/Layout.svelte";
  import { match } from "./routes";

  $: content = match($router);
</script>

<Layout>
  <svelte:component this={content} />
</Layout>
