<script>
  // more icons at https://simpleicons.org/
  import GithubSVG from "../svg/social-media/Github.svelte";
  import TwitterSVG from "../svg/social-media/Twitter.svelte";
  import LinkedInSVG from "../svg/social-media/LinkedIn.svelte";
  import VimeoSVG from "../svg/social-media/Vimeo.svelte";
  import { social } from "../data";

  const items = [
    {
      svg: GithubSVG,
      href: social.github.href
    },
    {
      svg: TwitterSVG,
      href: social.twitter.href
    },
    {
      svg: LinkedInSVG,
      href: social.linkedIn.href
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
    width: var(--gap-6);
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
