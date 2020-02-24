<script>
  import { onMount } from "svelte";

  let vidIds = ["BOYdZ0GyQFQ", "Bjnu_bnJ5Po"];

  function nextVid() {
    if (!vidIds.length) {
      console.warn("no videos to play");
      return '"BOYdZ0GyQFQ"'; // maybe a random popular one
    }
    if (vidIds.length === 1) return vidIds[0]; // just replay the last one or stop the player
    return vidIds.shift();
  }

  onMount(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    let player;
    window.onYouTubeIframeAPIReady = () => {
      player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId: nextVid(),
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      });
    };
  });

  function onYouTubeIframeAPIReady() {
    console.log("the youtube iframe is ready");
  }
  function onPlayerReady(event) {
    event.target.playVideo();
  }
  // let done = false;
  function onPlayerStateChange(event) {
    if (event.data === 0) {
      console.log(event);
      console.log("video done");
      event.target.loadVideoById(nextVid());
      event.target.playVideo();
    }

    // if (event.data == YT.PlayerState.PLAYING && !done) {
    //   console.log("some event happened");
    //   setTimeout(stopVideo, 6000);
    //   done = true;
    //   console.warn("video is done playing");
    // }
  }
  // function stopVideo() {
  //   player.stopVideo();
  // }
</script>

<div class="page new-page">
  <section>
    <h3>YouTube Videos</h3>
  </section>
  <div id="player" />
</div>

<style>
  .new-page {
    text-align: center;
    justify-content: space-evenly;
  }
</style>
