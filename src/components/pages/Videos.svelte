<script>
  import createCycleStore from "../../stores/cycle";
  import YouTube from "../../demo/YouTube.svelte";

  export const videos = [
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
  let player;

  function playNext() {
    store.next();
    player.loadVideoById($store.item.id);
  }
</script>

<div class="page videos-page">
  <section>
    <h3>YouTube Videos</h3>
  </section>
  <YouTube videoId={$store.item.id} bind:player on:end={playNext} />
  <div>{$store.item.title}</div>
  <button on:click={playNext}>Next</button>
</div>

<style>
  .videos-page {
    text-align: center;
    justify-content: space-evenly;
  }
</style>
