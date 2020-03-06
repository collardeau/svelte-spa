<script>
  import BoolDemo from "../../../stores/bool/Demo.svelte";
  import CycleDemo from "../../../stores/cycle/Demo.svelte";
  // import FetchDemo from "../../../stores/fetch/Demo.svelte";
  import RouterDemo from "../../../stores/hash-router/Demo.svelte";
</script>

<div class="container">
  <h3>Store Creators</h3>
  <section>
    <h5>Boolean</h5>
    <BoolDemo />
  </section>
  <section>
    <h5>Cycle</h5>
    <CycleDemo />
  </section>
  <!-- <section>
    <h5>Fetch</h5>
    <FetchDemo />
  </section> -->
  <section>
    <h5>Hash Router</h5>
    <RouterDemo />
  </section>

</div>

<style>
  .container {
    max-width: var(--size-7);
    margin: 0 auto;
  }
  section {
    margin-bottom: var(--gap-6);
    padding-bottom: var(--gap-8);
    border-bottom: 0.01rem solid var(--white);
  }
  h3 {
    margin: var(--gap-4) 0;
    text-align: center;
    font-size: var(--text-2xl);
  }
  h5 {
    margin-bottom: var(--gap-3);
    font-size: var(--text-base);
  }
  :global(.stores-demo p) {
    margin-bottom: var(--gap-3);
  }
</style>
