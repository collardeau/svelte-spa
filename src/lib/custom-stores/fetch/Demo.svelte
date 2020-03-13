<script>
  import createStore from "./createStore";
  import Store from "../../components/lib/Store.svelte";

  const store = createStore(
    "https://api.github.com/repos/sveltejs/svelte",
    // optional second param to shape data
    ({ homepage, stargazers_count }) => ({
      homepage,
      stargazers_count
    })
  );
</script>

<p>createStore("https://api.github.com/repos/sveltejs/svelte")</p>
<Store {store} />
