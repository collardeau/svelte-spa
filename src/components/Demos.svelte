<script>
  import ModalDemo from "../libs/modal/Demo.svelte";
  import RouterDemo from "../libs/hash-router/Demo.svelte";
  import SwiperDemo from "../libs/swiper/Demo.svelte";
  import FormDemo from "../libs/form/Demo.svelte";
  import RoughDemo from "../libs/roughjs/Demo.svelte";
  import TabsDemo from "../libs/tabs/Demo.svelte";
  import SweetAlertDemo from "../libs/sweetalert2/Demo.svelte";
  import FirebaseDemo from "../libs/firebase/Demo.svelte";

  import { getStore } from "../libs/stores";
  const store = getStore("demo-tabs");
</script>

<style>
  .container {
    margin-top: var(--gap-7);
  }
  h3 {
    margin: var(--gap-6) 0;
  }
  section {
    padding-bottom: var(--gap-6);
    margin-bottom: var(--gap-8);
    border-top: 1px solid #ccc;
  }
</style>

<div class="container">
  {#if $store.selected === 'tab-1'}
    <section>
      <h3>Firebase</h3>
      <FirebaseDemo />
    </section>
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
