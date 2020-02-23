<script>
  export let tabs = [];
  export let selected = "tab-1";
  // todo: flesh this out as a layout comp with the bool store creator
</script>

<ul>
  {#each tabs as { id, text }}
    <li class:selected={selected === id}>
      <button
        type="button"
        role="tab"
        on:click={() => {
          console.log({ selected: id });
        }}>
        {text}
      </button>
    </li>
  {/each}
</ul>

<style>
  .selected button {
    border-bottom: 2px solid var(--theme-color);
  }
</style>
