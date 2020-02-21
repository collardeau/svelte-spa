<script>
  import SocialMedia from "./SocialMedia.svelte";
</script>

<div class="container">
  <img src="img/blank-avatar.jpg" alt="avatar" />
  <div class="details">
    <p>My name is John Smith</p>
    <p>This is what I do!</p>
    <SocialMedia />
  </div>
</div>

<style>
  .container {
    text-align: center;
    margin-top: var(--gap-2);
  }
  img {
    width: var(--size-4);
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: var(--gap-2);
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  p {
    text-align: center;
    margin: var(--gap-1) 0;
  }
</style>
