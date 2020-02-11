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
  import ModalDemo from "../libs/modal/Demo.svelte";
  import RouterDemo from "../libs/hash-router/Demo.svelte";
  import SwiperDemo from "../libs/swiper/Demo.svelte";
  import FormDemo from "../libs/form/Demo.svelte";
  import RoughDemo from "../libs/roughjs/Demo.svelte";
  import TabsDemo from "../libs/tabs/Demo.svelte";
  import SweetAlertDemo from "../libs/sweetalert2/Demo.svelte";

  import Tabs from "../libs/tabs/Tabs.svelte";
</script>

<style>
  h3 {
    margin-bottom: 1.5rem;
    margin-top: 2rem;
  }
  div {
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
  }
  section {
    padding-bottom: 3rem;
    margin-bottom: 2rem;
    border-top: 1px solid #ccc;
  }
  .demos {
    margin-top: 2.5rem;
  }
  :global(.tabs ul) {
    display: flex;
    justify-content: space-evenly;
  }

  :global(.tabs button) {
    background: transparent;
    padding: 1rem;
    width: 10rem;
  }
</style>

<div>
  <a href="#/">Home</a>

  <h1>Kitchen Sink</h1>

  <div class="tabs">
    <Tabs name="demo-tabs" {tabs} />
  </div>

  <div class="demos">
    {#if $store.selected === 'tab-1'}
      <section>
        <h3>RoughJS</h3>
        <RoughDemo />
      </section>
      <section>
        <h3>Sweet Alert 2</h3>
        <SweetAlertDemo />
      </section>

      <section>
        <h3>Swiper</h3>
        <SwiperDemo />
      </section>
    {/if}
    {#if $store.selected === 'tab-2'}
      <section>
        <h3>Router</h3>
        <RouterDemo />
      </section>

      <section>
        <h3>Tabs</h3>
        <TabsDemo />
      </section>

      <section>
        <h3>Form</h3>
        <FormDemo />
      </section>

      <section>
        <h3>Modal</h3>
        <ModalDemo />
      </section>
    {/if}
  </div>
</div>
