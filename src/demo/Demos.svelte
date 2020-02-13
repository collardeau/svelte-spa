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

  const demos1 = [
    // integrations
    {
      title: "Firebase",
      comp: FirebaseDemo
    },
    {
      title: "RoughJS",
      comp: RoughDemo
    },
    {
      title: "Sweet Alert 2",
      comp: SweetAlertDemo
    },
    {
      title: "Swiper",
      comp: SwiperDemo
    }
  ];
  const demos2 = [
    // standalone
    {
      title: "Router",
      comp: RouterDemo
    },
    {
      title: "Tabs",
      comp: TabsDemo
    },
    {
      title: "Form",
      comp: FormDemo
    },
    {
      title: "Modal",
      comp: ModalDemo
    }
  ];
</script>

<style>
  .container {
    margin-top: var(--gap-7);
    --second-color: beige;
  }
  h3 {
    margin: var(--gap-6) 0;
  }
  section {
    padding-bottom: var(--gap-6);
    margin-bottom: var(--gap-8);
    border-top: 0.01rem solid var(--grey);
  }
</style>

<div class="container">
  {#if $store.selected === 'tab-1'}
    {#each demos1 as { title, comp }}
      <section>
        <h3>{title}</h3>
        <svelte:component this={comp} />
      </section>
    {/each}
  {/if}
  {#if $store.selected === 'tab-2'}
    {#each demos2 as { title, comp }}
      <section>
        <h3>{title}</h3>
        <svelte:component this={comp} />
      </section>
    {/each}
  {/if}
</div>
