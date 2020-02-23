<script>
  import "./css/global.css";
  import "./css/reset.css";
  import "./css/theme.css";

  import { setContext } from "svelte";
  import createRouter from "./libs/hash-router/createStore";
  import Layout from "./components/Layout.svelte";
  import { match } from "./routes";

  let router = createRouter();
  router.start();
  setContext("app-router", router);

  $: component = match($router);
</script>

<Layout>
  <svelte:component this={component} />
</Layout>
