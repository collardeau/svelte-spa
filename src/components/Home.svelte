<script>
  import SunnySVG from "../svgs/Sunny.svelte";
  import Forecasts from "./Forecasts.svelte";
</script>

<style>
  .hero {
    text-align: center;
  }
  h5 {
    font-size: var(--text-5xl);
    margin-top: var(--gap-6);
  }
  :global(.hero svg) {
    width: var(--size-5);
    height: var(--size-5);
  }
  @media (max-width: 640px) {
    h5 {
      font-size: var(--text-3xl);
      margin-top: var(--gap-5);
    }
    :global(.hero svg) {
      width: var(--size-4);
      height: var(--size-4);
    }
  }
</style>

<section>
  <div class="hero">
    <SunnySVG />
    <h5>A Sunny Tagline!</h5>
  </div>
  <Forecasts />
</section>
