<script>
  import CloseSVG from "../svg/Close.svelte";
  export let isOpen = false;
  export let close = () => {};
</script>

{#if isOpen}
  <div class="container">
    <div class="bg" />
    <div class="modal">
      <slot />
    </div>
  </div>
  <button on:click={close}>
    <CloseSVG />
  </button>
{/if}

<style>
  .container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--overlay-color, rgba(0, 0, 0, 0.9));
  }
  .modal {
    width: var(--modal-width, 50%);
    min-width: var(--modal-min-width, 300px);
    min-height: var(--modal-min-height, 0);
    margin: 0 auto;
    background-color: var(--white);
    z-index: 100;
  }

  button {
    position: fixed;
    top: 0;
    right: 0;
    height: var(--size-1);
    width: var(--size-1);
    margin: var(--gap-4);
    color: var(--white);
    border: none;
    background-color: transparent;
  }
</style>
