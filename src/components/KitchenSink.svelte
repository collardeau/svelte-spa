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
    min-width: 20rem;
  }
  :global(.tabs ul) {
    display: flex;
    justify-content: space-evenly;
  }
  :global(.tabs button) {
    padding: var(--gap-3);
    width: 8rem;
    background-color: transparent;
  }
</style>

<div class="container">
  <div class="tabs">
    <Tabs name="demo-tabs" {tabs} />
  </div>
  <Demos />
</div>
