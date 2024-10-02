<script>

  import Drawer from "../components/Drawer.svelte";
  import Feed from "../components/Feed.svelte";
  import News from "../components/News.svelte";
  import { user } from "../stores/user";
  user.subscribe(e => {
    console.log(e)
  })
</script>
<main>
    <div class="main bg-gray-900 h-screen text-white grid gap-0 md:grid-cols-12">
        <Drawer />
        <Feed  />
        <News />
      </div>
</main>