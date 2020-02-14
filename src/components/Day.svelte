<script>
  import SunnySVG from "../svgs/Sunny.svelte";
  export let day = "";
  export let max = 0;
</script>

<style>
  section {
    height: var(--size-5);
    padding: var(--gap-2) var(--gap-4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  h5 {
    color: var(--sky-blue);
    font-weight: 600;
  }
  .details {
    font-weight: 500;
  }
  :global(section svg) {
    width: var(--size-2);
    height: var(--size-2);
  }
</style>

<section>
  <h5>{day}</h5>
  <SunnySVG />
  <div class="details">{max} &deg;C</div>
</section>
