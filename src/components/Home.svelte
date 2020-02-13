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
</style>

<div class="hero">
  <SunnySVG />
  <h5>Let's Have Some Sun</h5>
</div>

<!-- <Forecasts /> -->
