<script context="module">
  import createTabsStore from "../libs/tabs/createStore";
  const store = createTabsStore("demo-tabs", { selected: "tab-1" });
  // add gists (or code sandbox)

  const tabs = [
    {
      text: "Integrations",
      id: "tab-1"
    },
    {
      text: "Stores",
      id: "tab-2"
    }
  ];
</script>

<script>
  import Tabs from "../libs/tabs/Tabs.svelte";
  import Demos from "./Demos.svelte";
</script>

<div class="page">
  <div class="tabs">
    <Tabs name="demo-tabs" {tabs} />
  </div>
  <Demos />
</div>

<style>
  .page {
    text-align: center;
    flex: 1;
    margin-top: var(--size-1);
  }
  .tabs {
    min-width: var(--size-8);
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
