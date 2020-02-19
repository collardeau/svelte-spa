<script>
  import { integrations, customStores } from "../data";
  // also fetch and localStorage
  import { getStore } from "../libs/stores";
  const store = getStore("demo-tabs");
</script>

<div class="container">
  {#if $store.selected === 'tab-1'}
    {#each integrations as { title, comp, href }}
      <section>
        <h3>{title}</h3>
        <svelte:component this={comp} />
        <div class="details">
          <a {href}>code</a>
        </div>
      </section>
    {/each}
  {/if}
  {#if $store.selected === 'tab-2'}
    {#each customStores as { title, comp, href }}
      <section>
        <h3>{title}</h3>
        <svelte:component this={comp} />
        <div class="details">
          <a {href}>code</a>
        </div>
      </section>
    {/each}
    <section>
      <h3>Fetch</h3>
      coming Soon
    </section>
    <section>
      <h3>Local Storage</h3>
      coming Soon
    </section>
  {/if}
</div>

<style>
  .container {
    margin-top: var(--gap-7);
    --second-color: beige;
  }
  h3 {
    margin: var(--gap-6) 0;
  }
  section {
    padding-bottom: var(--gap-6);
    margin-bottom: var(--gap-8);
    border-bottom: 0.01rem solid var(--grey);
  }
  .details {
    margin-top: var(--gap-7);
    font-size: var(--text-sm);
  }
</style>
