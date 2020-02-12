<script>
  import { getStore } from "../stores";
  export let name = "";
  const store = getStore(name);
  const { close } = store;
  $: isOpen = $store.isOpen;
</script>

<style>
  .container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 10; /* swiper slides hide modal without a z-index */
  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    background-color: rgba(0, 0, 0, 0.67);
  }
  .modal {
    width: 50%;
    min-width: 300px;
    margin: 0 auto;
    background-color: #fff;
  }

  button {
    float: right;
    margin: var(--gap-5);
    height: 3rem;
    width: 3rem;
    color: #fff;
    border: none;
    background-color: transparent;
  }
  svg {
    fill: currentColor;
  }
</style>

{#if isOpen}
  <div class="container">
    <div class="bg">
      <button on:click={close}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414
            1.414L10 11.414l7.071 7.071 1.414-1.414L11.414
            10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      </button>
    </div>
    <div class="modal">
      <slot />
    </div>
  </div>
{/if}
