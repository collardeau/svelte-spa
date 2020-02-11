<script>
  import ModalDemo from "../libs/modal/Demo.svelte";
  import RouterDemo from "../libs/hash-router/Demo.svelte";
  import SwiperDemo from "../libs/swiper/Demo.svelte";
  import FormDemo from "../libs/form/Demo.svelte";
  import RoughDemo from "../libs/roughjs/Demo.svelte";
  import TabsDemo from "../libs/tabs/Demo.svelte";
  import SweetAlertDemo from "../libs/sweetalert2/Demo.svelte";
</script>

<style>
  div {
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
  }
  section {
    margin-bottom: 2rem;
  }
</style>

<div>
  <a href="#/">Home</a>
  <h1>Kitchen Sink</h1>

  <section>
    <h3>Router</h3>
    <RouterDemo />
  </section>

  <section>
    <h3>Tabs</h3>
    <TabsDemo />
  </section>

  <section>
    <h3>Modal</h3>
    <ModalDemo />
  </section>

  <section>
    <h3>Form</h3>
    <FormDemo />
  </section>

  <section>
    <h3>Sweet Alert 2</h3>
    <SweetAlertDemo />
  </section>

  <section>
    <h3>Swiper</h3>
    <SwiperDemo />
  </section>

  <section>
    <h3>RoughJS</h3>
    <RoughDemo />
  </section>
</div>
