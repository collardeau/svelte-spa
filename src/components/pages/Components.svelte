<script context="module">
  import Modal from "../demo/Modal.svelte";
  import YouTube from "../demo/YouTube.svelte";
  import createBoolStore from "../../stores/bool";
  const bool = createBoolStore();
  let player;
</script>

<div class="page comps-demo">
  <h3>Components</h3>
  <section>
    <h5>Modal</h5>
    <Modal isOpen={$bool} close={bool.off}>Hi! I'm a modal!</Modal>
    <button on:click={bool.on}>open modal</button>
  </section>
  <section>
    <h5>YouTube</h5>
    <YouTube videoId="AdNJ3fydeao" bind:player />
    <div>
      <button on:click={() => player.playVideo()}>play</button>
      <button on:click={() => player.pauseVideo()}>stop</button>
    </div>
  </section>
</div>

<style>
  .comps-demo {
    text-align: center;
  }
  h3 {
    margin: var(--gap-5) 0;
    font-size: var(--text-2xl);
  }
  h5 {
    margin-bottom: var(--gap-4);
  }
  section {
    margin-bottom: var(--gap-8);
  }
</style>
