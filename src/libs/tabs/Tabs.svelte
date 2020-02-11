<script>
  import { getStore } from "../stores";
  export let name = "";
  export let tabs = [];

  const store = getStore(name);
  $: selected = $store.selected;
</script>

<style>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  li {
    margin-right: 0.5rem;
  }
  .selected button {
    /* border: none; */
    border-bottom: 2px solid var(--theme-color);
  }
</style>

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
