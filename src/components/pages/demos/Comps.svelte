<script>
  import ModalDemo from "../../lib/ModalDemo.svelte";
  import YouTubeDemo from "../../lib/YouTubeDemo.svelte";

  const getHref = comp =>
    `https://github.com/collardeau/svelte-spa/blob/master/src/components/lib/${comp}.svelte`;
</script>

<div class="comps-demo">
  <h3>Components</h3>
  <section>
    <h5>Modal</h5>
    <ModalDemo />
    <div>
      <a href={getHref('ModalDemo')}>code</a>
    </div>
  </section>
  <section>
    <h5>YouTube Player</h5>
    <YouTubeDemo />
    <div>
      <a href={getHref('YouTubeDemo')}>code</a>
    </div>
  </section>
</div>

<style>
  .comps-demo {
    min-width: var(--size-7);
    max-width: var(--size-8);
    margin: 0 auto;
  }
  h3 {
    margin: var(--gap-4) 0;
    font-size: var(--text-2xl);
    text-align: center;
  }
  h5 {
    margin-bottom: var(--gap-4);
    font-size: var(--text-base);
  }
  section {
    margin-bottom: var(--gap-8);
    padding-bottom: var(--gap-6);
    border-bottom: 0.01rem solid var(--white);
  }
</style>
