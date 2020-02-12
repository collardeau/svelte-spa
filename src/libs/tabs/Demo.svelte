<script context="module">
  import createTabsStore from "./createStore";

  const store = createTabsStore("my-tabs", { selected: "tab-1" });

  const tabs = [
    {
      text: "Tab 1",
      id: "tab-1"
    },
    {
      text: "Tab 2",
      id: "tab-2"
    }
  ];
</script>

<script>
  import Tabs from "./Tabs.svelte";

  $: selected = $store.selected;
</script>

<style>
  :global(.tabs-demo ul) {
    display: flex;
    justify-content: center;
  }
  :global(.tabs-demo li) {
    margin-right: var(--gap-2);
  }
</style>

<section class="tabs-demo">

  <Tabs name="my-tabs" {tabs} />

  {#if selected === 'tab-1'}
    <div>Content of Tab 1</div>
  {/if}
  {#if selected === 'tab-2'}
    <div>Content of Tab 2</div>
  {/if}
</section>
