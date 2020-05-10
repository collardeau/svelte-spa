<script>
  import createRouter from "../lib/custom-stores/hash-router/createStore";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import About from "../pages/About.svelte";
  import Home from "../pages/Intro.svelte";
  import Stores from "../pages/Stores.svelte";
  import Comps from "../pages/Comps.svelte";
  import Books from "../pages/Books/Books.svelte";

  const router = createRouter();
  router.start();

  $: route = $router.route;

  let comp;
  $: switch (route) {
    case "about":
      comp = About;
      break;
    case "components":
      comp = Comps;
      break;
    case "stores":
      comp = Stores;
      break;
    case "books":
      comp = Books;
      break;
    default:
      comp = Home;
  }
</script>

<div class="layout">
  <header class="row">
    <div />
    <Header {route} />
    <div />
  </header>
  <main class="row">
    <div />
    <svelte:component this={comp} params={$router.params} />
    <div />
  </main>
  <!-- <footer class="row">
    <div />
    <Footer />
    <div />
  </footer> -->
</div>

<style>
  .layout,
  .row {
    display: grid;
  }
  .layout {
    min-height: 100vh;
    max-width: 100vw;
    grid-template-rows: auto 1fr auto;
  }
  .row {
    grid-template-columns: 1fr minmax(auto, var(--container-width)) 1fr;
  }
  header,
  footer {
    background-color: var(--white);
    min-height: var(--size-1);
    align-items: center;
  }
  header {
    border-bottom: 1px solid #ddd;
  }
  footer {
    border-top: 1px solid #ddd;
  }
</style>
