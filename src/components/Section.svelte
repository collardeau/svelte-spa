<script>
  export let title = "";
  export let items = [];
</script>

<section class="section">
  <h3>{title}</h3>
  <ul>
    {#each items as item}
      <li>
        <slot {item} />
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    margin: var(--gap-4) 0;
  }
  h3 {
    margin-bottom: var(--gap-3);
  }
  li {
    margin-bottom: var(--gap-3);
  }
  :global(.section a) {
    color: var(--black);
    padding-bottom: 0.125rem;
    text-decoration: none;
    border-bottom: 1px dotted;
  }
</style>
