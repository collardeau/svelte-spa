<script>
  import Swiper from "./Swiper.svelte";

  // in order to use this lib, you need to install swipper
  // npm i swiper@5.3.1
  // full api at https://swiperjs.com/api/

  const params = {
    loop: true,
    on: {
      init: () => {
        // console.log("swiper initialized");
      }
    }
  };
</script>

<style>
  .swiper-slide {
    height: 10rem;
    color: white;
  }
  .slide-1 {
    background-color: var(--theme-color);
    padding-top: 1rem;
  }
  .slide-2 {
    background-color: rgb(0, 80, 160);
    padding-top: 1rem;
  }
</style>

<Swiper {params}>
  <!-- each slide requires the class "swiper-slide" -->
  <div class="swiper-slide slide-1">Slide 1</div>
  <div class="swiper-slide slide-2">Slide 2</div>
</Swiper>
