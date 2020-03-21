<script>
  //
  const arr = new Array(1024);
</script>

<div class="grid">
  <!-- {#each arr as item, i}
    <div id={`cell-${i + 1}`}>{i + 1}</div>
  {/each} -->
  <div id="heading">My App</div>
  <div id="tab-1">Tab 1</div>
  <div id="tab-2">Tab 2</div>
  <div id="tab-3">Tab 3</div>
  <div id="player-1">Nadal</div>
  <div id="player-2">Federer</div>
  <div id="p1s1">6</div>
  <div id="p1s2">6</div>
  <div id="p1s3">6</div>
  <div id="p1s4">6</div>
  <div id="p1s5">6</div>
</div>

<style>
  .grid {
    display: grid;
    height: 100%;
    grid-template-columns: repeat(32, 3.125%);
    grid-template-rows: repeat(32, 3.125%);
  }
  .grid > * {
    display: grid;
    height: 100%;
    place-items: center;
    line-height: 100%;
    background: white;
    /* border: 1px solid; */
  }
  #cell-23,
  #heading {
    grid-column: 13 / span 8;
    grid-row: 2 / span 1;
  }
  #cell-23,
  #tab-1 {
    grid-column: 8 / span 8;
    grid-row: 2 / span 1;
  }
  #cell-52,
  #tab-1 {
    grid-column: 9 / span 4;
    grid-row: 4 / span 1;
  }
  #cell-52,
  #tab-2 {
    grid-column: 15 / span 4;
    grid-row: 4 / span 1;
  }
  #cell-52,
  #tab-3 {
    grid-column: 21 / span 4;
    grid-row: 4 / span 1;
  }
  #player-1 {
    grid-column: 9 / span 11;
    grid-row: 6 / span 1;
    text-align: left;
  }

  #player-2 {
    grid-column: 9 / span 11;
    grid-row: 7 / span 1;
  }
  #p1s1 {
    grid-column: 20 / span 1;
    grid-row: 6 / span 1;
  }
  #p1s2 {
    grid-column: 21 / span 1;
    grid-row: 6 / span 1;
  }
  #p1s3 {
    grid-column: 22 / span 1;
    grid-row: 6 / span 1;
  }
  #p1s4 {
    grid-column: 23 / span 1;
    grid-row: 6 / span 1;
  }
  #p1s5 {
    grid-column: 24 / span 1;
    grid-row: 6 / span 1;
  }
</style>
