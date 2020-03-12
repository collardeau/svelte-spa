<script>
  import "./styles/global.css";
  import "./styles/reset.css";
  import "./styles/theme.css";

  import { setContext } from "svelte";
  import Layout from "./components/layout/Layout.svelte";
  import createObserver from "./stores/intersection-observer/createStore";

  let observer$ = createObserver();
  setContext("intersection-observer", observer$);
</script>

<Layout />
