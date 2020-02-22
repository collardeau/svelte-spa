<script>
  import { demos } from "./demo-data";
</script>

<div class="page kitchen-sink-page">
  <h3>Kitchen Sink</h3>
  <div class="demos">
    {#each demos as { title, comp, href }}
      <section>
        <h5>{title}</h5>
        <svelte:component this={comp} />
        <div class="details">
          <a {href}>code</a>
        </div>
      </section>
    {/each}
    <!-- <section>
      <h5>Fetch</h5>
      coming soon
    </section> -->
    <section>
      <h5>Local Storage</h5>
      coming Soon
    </section>
  </div>

</div>

<style>
  .kitchen-sink-page {
    text-align: center;
    justify-content: flex-start;
    max-width: var(--size-8);
  }
  .demos {
    padding: var(--gap-4) 0;
  }
  h3 {
    margin: var(--gap-4);
  }
  h5 {
    font-size: var(--text-base);
  }
  section {
    margin-bottom: var(--gap-6);
    padding-bottom: var(--gap-8);
    border-bottom: 0.01rem solid var(--white);
  }
  .details {
    margin-top: var(--gap-7);
    font-size: var(--text-sm);
  }
</style>
