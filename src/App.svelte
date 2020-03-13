<script>
  import "./styles/global.css";
  import "./styles/reset.css";
  import "./styles/theme.css";

  import { setContext } from "svelte";
  import Layout from "./components/Layout.svelte";
  import createObserver from "./lib/custom-stores/intersection-observer/createStore";

  let observer = createObserver();
  setContext("intersection-observer", observer);
</script>

<Layout />
