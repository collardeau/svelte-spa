<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
</script>

<div class="layout">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .layout {
    min-height: 100vh;
    max-width: 100vw;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  main {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 var(--gap-2);
    display: flex;
    flex-direction: column;
  }
</style>
