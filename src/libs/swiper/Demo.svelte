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
  .container {
    --swiper-theme-color: rgba(255, 255, 255, 0.8);
  }
  .swiper-slide {
    height: var(--size-6);
    padding-top: var(--gap-4);
    color: var(--white);
  }
  .slide-1 {
    background-color: var(--theme-color);
  }
  .slide-2 {
    background-color: green;
  }
</style>

<div class="container">
  <Swiper {params}>
    <!-- each slide requires the class "swiper-slide" -->
    <div class="swiper-slide slide-1">Slide 1</div>
    <div class="swiper-slide slide-2">Slide 2</div>
  </Swiper>
</div>
