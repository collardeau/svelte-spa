<script>
  import { fade } from "svelte/transition";

  export let p1;
  export let p2;
  export let sets = [];

  let numSets = sets.length;
  sets[3] = sets[3] || ["", ""];
  sets[4] = sets[4] || ["", ""];

  let showWinner = false;
  $: p1Wins = showWinner && p1.win;
  $: p2Wins = showWinner && p2.win;

  let play = false;
  const duration = 500; // set duration
  const onClick = () => (play = true);
  const endMatch = () => (showWinner = true);
</script>

<div class="container" on:click={onClick}>
  <div class="player" class:bold={p1Wins}>{p1.name}</div>
  <div class="player" class:bold={p2Wins}>{p2.name}</div>
  {#each sets as set, i}
    <div class="games" class:bold={set[0] > set[1]}>
      {#if play}
        <div
          in:fade={{ duration, delay: i * duration * 2 }}
          out:fade={{ duration: 0 }}>
          {set[0]}
        </div>
      {/if}
    </div>
    <div class="games" class:bold={set[0] < set[1]}>
      {#if play}
        <div
          on:introend={() => {
            if (i === numSets - 1) {
              endMatch();
            }
          }}
          out:fade={{ duration: 0 }}
          in:fade={{ duration, delay: i * duration * 2 }}>
          {set[1]}
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .container {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr repeat(5, var(--gap-7));
    grid-template-rows: repeat(2, var(--gap-8));
    grid-auto-flow: column;
  }

  .container > * {
    display: grid;
    height: 100%;
    place-items: center;
    text-align: center;
    border: 0.01rem solid;
  }

  .player {
    text-transform: capitalize;
  }
  .bold {
    font-weight: 800;
  }
</style>
