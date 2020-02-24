<script>
  import { writable } from "svelte/store";
  import createCycleStore from "../../libs/cycle/createStore";
  import { videos } from "../../data";

  const store = createCycleStore(videos);

  let player;
  window.onYouTubeIframeAPIReady = () => {
    player = new YT.Player("player", {
      height: "390",
      width: "640",
      videoId: $store.item.id,
      events: {
        // onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    });
  };

  function onPlayerStateChange(event) {
    if (event.data === 0) {
      playNext();
    }
  }

  function playNext() {
    store.next();
    player.loadVideoById($store.item.id);
    player.playVideo();
  }
</script>

<svelte:head>
  <script src="https://www.youtube.com/iframe_api">

  </script>
</svelte:head>

<div class="page videos-page">
  <section>
    <h3>YouTube Videos</h3>
  </section>
  <div id="player" />
  <div>{$store.item.title}</div>
  <button on:click={playNext}>Next</button>
</div>

<style>
  .videos-page {
    text-align: center;
    justify-content: space-evenly;
  }
</style>
