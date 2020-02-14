<script>
  import SunnySVG from "../svgs/Sunny.svelte";
  import PartlyCloudySVG from "../svgs/PartlyCloudyDay.svelte";
  import CloudySVG from "../svgs/Cloudy.svelte";
  import OvercastSVG from "../svgs/Overcast.svelte";
  export let day = "";
  export let max = 0;
  export let weather = "sunny";

  let svg;
  switch (weather) {
    case "sun":
      svg = SunnySVG;
      break;
    case "cloud1":
      svg = PartlyCloudySVG;
      break;
    case "cloud2":
      svg = CloudySVG;
      break;
    case "cloud3":
      svg = OvercastSVG;
      break;
    default:
      console.warn("did not find weather svg for: ", weather);
  }
</script>

<style>
  section {
    height: var(--size-5);
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
  <svelte:component this={svg} />
  <div class="details">{max} &deg;C</div>
</section>
