<script>
  //
</script>

<div class="project-page">
  <slot />
</div>

<style>
  .project-page {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    max-width: var(--size-8);
    line-height: 1.4;
  }
  :global(.project-page h3) {
    /* font-size: var(--text-2xl); */
    font-weight: 300;
  }
  :global(.project-page h5) {
    margin-bottom: var(--gap-4);
    font-size: var(--text-base);
  }
</style>
