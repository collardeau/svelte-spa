<script>
  import { onMount } from "svelte";

  let parts = [];

  const update = () => {
    const hash = window.location.hash;
    parts = hash.replace(/^#\/?|\/$/g, "").split("/");
  };

  onMount(() => {
    update();
    // window.onhashchange = () => update();
  });
</script>

<div class="container">
  {#each parts as part, i}
    <div class="crumb">
      <a href={`#${parts.slice(0, i + 1).join('/')}`}>{part}</a>
    </div>
  {/each}
</div>

<style>
  .container {
    display: grid;
    height: 100%;
    place-items: center;
    grid-auto-flow: column;
  }
  .crumb::after {
    content: "/";
    margin: 0 var(--gap-1);
  }
  .crumb:last-child:after {
    content: "";
  }
  a {
    display: inline-block;
    height: 100%;
    padding: var(--gap-1);
  }
</style>
