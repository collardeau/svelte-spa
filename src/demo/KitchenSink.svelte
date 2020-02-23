<script>
  import { demos } from "./demo-data";
</script>

<div class="page kitchen-sink-page">
  <h3>Stores</h3>
  <div class="demos">
    <!-- <p>You can create custom stores!</p> -->
    {#each demos as { title, comp, href }}
      <section>
        <h5>{title}</h5>
        <svelte:component this={comp} />
        <div class="details">
          <a {href}>code</a>
        </div>
      </section>
    {/each}
  </div>

</div>

<style>
  .kitchen-sink-page {
    /* text-align: center; */
    justify-content: flex-start;
    width: var(--size-8);
  }
  p {
    text-align: left;
  }
  .demos {
    padding: var(--gap-4) 0;
  }
  h3 {
    margin: var(--gap-4);
    text-align: center;
    font-size: var(--text-3xl);
  }
  h5 {
    font-size: var(--text-sm);
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
  :global(.demos pre) {
    background-color: var(--white);
    padding: var(--gap-2);
    min-width: var(--size-8);
    /* min-height: var(--size-4); */
  }
</style>
