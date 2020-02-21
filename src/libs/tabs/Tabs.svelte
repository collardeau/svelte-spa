<script>
  import { getStore } from "../stores";
  export let name = "";
  export let tabs = [];

  const store = getStore(name);
  $: selected = $store.selected;
</script>

<ul>
  {#each tabs as { id, text }}
    <li class:selected={selected === id}>
      <button
        type="button"
        role="tab"
        on:click={() => {
          store.set({ selected: id });
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
