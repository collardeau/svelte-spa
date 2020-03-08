<script>
  import About from "../pages/About.svelte";
  import Home from "../pages/Home.svelte";
  import Stores from "../pages/demos/Stores.svelte";
  import Comps from "../pages/demos/Comps.svelte";

  const l = [["page 1", "page 2"], ["page 3", "page 4"]];
  let selected = "page-1";

  const onIntersect = entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        selected = e.target.id;
      }
    });
  };

  const observer = new IntersectionObserver(onIntersect, {
    threshold: 1
  });

  $: console.log({ selected });

  const action = node => observer.observe(node);
</script>

<div class="layout">
  <div id="page-1" class="page-1" use:action>
    <Home />
  </div>
  <div id="page-2" class="page-2" use:action>
    <About />
  </div>
  <div id="page-3" class="page-3" use:action>
    <Stores />
  </div>
  <div id="page-4" class="page-4" use:action>Page 4</div>
</div>

<style>
  .layout {
    display: grid;
    /* grid-auto-rows: minmax(100vh, auto); */
    grid-auto-rows: 100vh;
    grid-auto-columns: 100vw;
    scroll-snap-type: both mandatory;
    overflow: scroll;
    height: 100vh;
    width: 100vw;
  }

  .layout > * {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    display: grid;
    place-items: center;
    border: 1px solid lightslategray;
    /* scroll-margin: 20px; */
  }

  .page-1 {
    /* background: lightblue; */
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
  .page-2 {
    /* background: beige; */
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
  .page-3 {
    /* background: lightseagreen; */
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
  .page-4 {
    /* background: lightslategray; */
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }
</style>
