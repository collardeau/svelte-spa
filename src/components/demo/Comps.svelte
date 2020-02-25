<script>
  import DemoModal from "./DemoModal.svelte";
  import DemoTY from "./DemoYT.svelte";

  const getHref = comp =>
    `https://github.com/collardeau/svelte-spa/blob/master/src/components/demo/${comp}.svelte`;
</script>

<div class="page comps-demo">
  <h3>Components</h3>
  <section>
    <h5>Modal</h5>
    <DemoModal />
    <div>
      <a href={getHref('DemoModal')}>code</a>
    </div>
  </section>
  <section>
    <h5>YouTube Player</h5>
    <DemoTY />
    <div>
      <a href={getHref('DemoTY')}>code</a>
    </div>
  </section>
</div>

<style>
  .comps-demo {
    text-align: center;
  }
  h3 {
    margin: var(--gap-5) 0;
    font-size: var(--text-2xl);
  }
  h5 {
    margin-bottom: var(--gap-4);
  }
  section {
    margin-bottom: var(--gap-8);
    padding-bottom: var(--gap-6);
    border-bottom: 0.01rem solid var(--white);
  }
</style>
