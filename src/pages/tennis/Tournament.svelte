<script>
  import Match from "./Match.svelte";
  export let name;
  export let year;
  export let quarters = [];
  export let semis = [];
  export let final = {};

  let activeTab = "quarters";

  const onTabClick = (tabName = "") => {
    activeTab = tabName;
  };
</script>

<section>

  <h3>ATP > A0 2020</h3>
  <div class="tabs">
    <div class="tab" on:click={() => onTabClick('quarters')}>1/4</div>
    <div class="tab" on:click={() => onTabClick('semis')}>1/2</div>
    <div class="tab" on:click={() => onTabClick('final')}>Final</div>
  </div>
  <div class="round">
    {#if activeTab === 'quarters'}
      {#each quarters as quarter, i (`q${i}`)}
        <Match {...quarter} />
      {/each}
    {/if}
    {#if activeTab === 'semis'}
      {#each semis as match, i (`s${i}`)}
        <Match {...match} />
      {/each}
    {/if}
    {#if activeTab === 'final'}
      <Match {...final} />
    {/if}

  </div>
</section>

<style>
  section {
    grid-template-rows: repeat(2, 3rem) 1fr;
    align-items: center;
  }
  div,
  section {
    display: grid;
    width: 100%;
    height: 100%;
  }
  h3 {
    text-align: center;
    font-size: 1rem;
  }
  .tabs {
    height: var(--gap-7);
    justify-content: center;
    grid-gap: var(--gap-2);
    grid-template-columns: repeat(auto-fit, minmax(max-content, var(--size-1)));
  }
  .tab {
    min-width: var(--gap-8);
    place-items: center;
  }
</style>
