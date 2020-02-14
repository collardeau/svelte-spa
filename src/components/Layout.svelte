<script>
  import Header from "./Header.svelte";
  import CitySVG from "../svgs/City.svelte";
</script>

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
  footer {
    background-color: transparent;
    position: relative;
    margin-top: -300px;
    z-index: -10;
  }
</style>

<div class="layout">
  <Header />
  <main>
    <slot />
  </main>
  <footer>
    <CitySVG />
  </footer>
</div>
