<script>
  // more icons at https://simpleicons.org/
  import GithubSVG from "../svg/Github.svelte";
  import TwitterSVG from "../svg/Twitter.svelte";
  import LinkedInSVG from "../svg/LinkedIn.svelte";
  import { social } from "../data";

  const { github, twitter, linkedIn } = social;
  const items = [
    {
      href: github.href,
      svg: GithubSVG
    },
    {
      href: twitter.href,
      svg: TwitterSVG
    },
    {
      href: linkedIn.href,
      svg: LinkedInSVG
    }
  ];
</script>

<div class="social-media">
  {#each items as { svg, href }}
    <div class="icon">
      <a {href}>
        <svelte:component this={svg} />
      </a>
    </div>
  {/each}
</div>

<style>
  .social-media {
    display: flex;
    margin: 0 auto;
  }
  .icon {
    width: var(--gap-5);
    padding: var(--gap-2);
  }
  a {
    color: #ccc;
  }
  a:hover {
    color: var(--black);
  }
  :global(.social-media svg) {
    fill: currentColor;
  }
</style>
