<script>
  import SocialMedia from "./SocialMedia.svelte";
</script>

<div class="container">
  <img src="img/blank-avatar.jpg" alt="avatar" />
  <p>
    Hi. My name is
    <strong>Thomas Collardeau.</strong>
  </p>
  <p>I build stuff for the web!</p>
  <SocialMedia />
</div>

<style>
  .container {
    display: flex;
    min-height: var(--size-6);
    flex-direction: column;
    justify-content: space-between;
  }
  img {
    width: var(--size-4);
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: var(--gap-3);
  }
</style>
