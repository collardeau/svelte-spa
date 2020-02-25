<script context="module">
  import createCycleStore from "../../stores/cycle";
  const videos = [
    {
      id: "BOYdZ0GyQFQ",
      title: "Superblood Wolfmoon"
    },
    {
      id: "ymf7DZUeVow",
      title: "Dance of the Clairvoyants"
    }
  ];
  const store = createCycleStore(videos);
</script>

<script>
  import YouTube from "../demo/YouTube.svelte";

  let player;

  function playNext() {
    store.next();
    player.loadVideoById($store.item.id);
  }

  function onChange(e) {
    if (e.data === 0) {
      playNext();
    }
  }
</script>

<div class="page videos-page">
  <section>
    <h3>YouTube Videos</h3>
  </section>
  <YouTube
    videoId={$store.item.id}
    id="video-player"
    bind:player
    on:change={onChange} />
  <div>{$store.item.title}</div>
  <button on:click={playNext}>Next</button>
</div>

<style>
  .videos-page {
    text-align: center;
    justify-content: space-evenly;
  }
</style>
