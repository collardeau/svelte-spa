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
    display: flex;
    flex-direction: column;
  }
  main {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 var(--gap-2);
    flex: 1;
    display: flex; /* so slot can flex:1 */
    flex-direction: column;
  }
</style>
