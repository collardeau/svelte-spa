<script>
  import { createEventDispatcher, onMount } from "svelte";
  export let videoId = "";
  export let player = {};
  // todo: domId as prop
  const dispatch = createEventDispatcher();

  onMount(() => {
    window.onYouTubeIframeAPIReady = () => {
      player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId,
        events: {
          // onReady: onPlayerReady,
          onStateChange: e => {
            // dispatch("change", e);
            if (e.data === 0) {
              dispatch("end", e);
            }
          }
        }
      });
    };
  });
</script>

<svelte:head>
  <script src="https://www.youtube.com/iframe_api">

  </script>
</svelte:head>

<div id="player" />
