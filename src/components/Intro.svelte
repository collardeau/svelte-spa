<script>
  import SocialMedia from "./SocialMedia.svelte";
</script>

<div class="container">
  <img src="img/avatar-2.jpg" alt="avatar" />
  <div class="details">
    <p>
      Hi. My name is
      <strong>Thomas Collardeau.</strong>
    </p>
    <p>I build stuff for the web!</p>
    <SocialMedia />
  </div>
</div>

<style>
  .container {
    /* display: flex; */
    text-align: center;
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: var(--size-4);
    margin-left: var(--gap-5);
    /* text-align: left; */
  }
  img {
    width: var(--size-4);
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: var(--gap-3);
  }
</style>
