<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import Home from "../pages/Home.svelte";
</script>

<div class="layout">
  <header class="row">
    <div />
    <Header />
    <div />
  </header>
  <main class="row">
    <div />
    <Home />
    <div />
  </main>
  <footer class="row">
    <div />
    <Footer />
    <div />
  </footer>
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
