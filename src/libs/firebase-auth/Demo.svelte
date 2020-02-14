<script context="module">
  import createAuthStore from "./createStore";
  // import { firebaseAuth } from "../../firebase";
  // const auth = createAuthStore("user-auth", firebaseAuth);
  // work offline for now
  const auth = createAuthStore("user-auth");
</script>

<script>
  // $: console.log($auth);
</script>

<div>{$auth.uid || 'not signed in'}</div>
