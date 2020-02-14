<script context="module">
  import createTabsStore from "../libs/tabs/createStore";
  const store = createTabsStore("demo-tabs", { selected: "tab-1" });

  const tabs = [
    {
      text: "Integrations",
      id: "tab-1"
    },
    {
      text: "Standalone",
      id: "tab-2"
    }
  ];
</script>

<script>
  import Tabs from "../libs/tabs/Tabs.svelte";
  import Demos from "./Demos.svelte";
</script>

<style>
  .container {
    text-align: center;
  }
  .tabs {
    min-width: var(--size-8);
  }
  h3 {
    font-size: var(--text-2xl);
    padding: var(--gap-6);
  }
  :global(.tabs ul) {
    display: flex;
    justify-content: space-evenly;
  }
  :global(.tabs button) {
    padding: var(--gap-3);
    width: var(--size-5);
    background-color: transparent;
  }
</style>

<div class="container">
  <h3>Kitchen Sink</h3>
  <div class="tabs">
    <Tabs name="demo-tabs" {tabs} />
  </div>
  <Demos />
</div>
