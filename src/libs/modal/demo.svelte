<script context="module">
  import createModalStore from "./createStore";
  const name = "my-modal";
  createModalStore(name, { isOpen: false });
</script>

<script>
  import Modal from "./modal.svelte";
  import { getStore } from "../stores";
  const openModal = () => getStore(name).open();
</script>

<Modal {name}>
  <p>Hello there</p>
</Modal>

<button on:click={openModal}>Open Modal</button>
