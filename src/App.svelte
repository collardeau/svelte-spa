<script>
  import "./css/global.css";
  import "./css/reset.css";
  import "./css/theme.css";

  import { setContext } from "svelte";
  import Layout from "./components/layout/Layout.svelte";
  import createRouter from "./stores/hash-router";
  import { match } from "./routes";

  let router = createRouter();
  router.start();
  setContext("app-router", router);

  $: component = match($router);
</script>

<Layout>
  <svelte:component this={component} />
</Layout>
