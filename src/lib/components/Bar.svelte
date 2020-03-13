<script>

</script>

<div class="container">
  <div class="left">
    <slot name="left" />
  </div>
  <div class="right">
    <slot name="right" />
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-gap: var(--grid-gap, 0);
    align-items: center;
    height: 100%;
  }

  .left {
    text-align: left;
  }
  .right {
    text-align: right;
  }
</style>
