<script>
  import SwiperJS from "swiper";
  import "../../../node_modules/swiper/css/swiper.css";

  export let params = {};

  function action(node) {
    const mySwiper = new SwiperJS(node, {
      ...params,
      pagination: {
        el: ".swiper-pagination"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
    return {
      destroy() {
        mySwiper.destroy();
      }
    };
  }
</script>

<style>
  .swiper-container {
    max-width: var(--size-8);
  }
</style>

<div use:action class="swiper-container">
  <div class="swiper-wrapper">
    <slot />
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination" />

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev" />
  <div class="swiper-button-next" />

  <!-- If we need scrollbar -->
  <!-- <div class="swiper-scrollbar" /> -->
</div>
