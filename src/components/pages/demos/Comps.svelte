<script>
  import ModalDemo from "../../lib/ModalDemo.svelte";
  import YouTubeDemo from "../../lib/YouTubeDemo.svelte";

  const getHref = comp =>
    `https://github.com/collardeau/svelte-spa/blob/master/src/components/demo/${comp}.svelte`;
</script>

<div class="page comps-demo">
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
    text-align: center;
  }
  h3 {
    margin: var(--gap-5) 0;
    font-size: var(--text-2xl);
  }
  h5 {
    margin-bottom: var(--gap-4);
  }
  section {
    margin-bottom: var(--gap-8);
    padding-bottom: var(--gap-6);
    border-bottom: 0.01rem solid var(--white);
  }
</style>
