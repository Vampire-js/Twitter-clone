<script>
  import Tweet from "./Tweet.svelte";
import TweetBtn from "./TweetBtn.svelte";
  import TweetEditor from "./TweetEditor.svelte";

  let tweets = []

  fetch("http://localhost:4000/")
  .then(e => e.json())
  .then(e => {
    tweets = e
  })

</script>

<main class="h-screen col-span-6 border-r-2 border-r-gray-800 border-l-2 border-l-gray-800 ">
    <TweetBtn />
  
    <div class="head text-xl font-bold border-b-2 border-b-gray-800 p-4" >
        Feed
    </div>
    <TweetEditor />
    <div class="tweets p-4 h-full overflow-scroll "> 
        {#each  tweets as tweet }
        <Tweet name={tweet.name} message={tweet.message} />
        {/each}
    </div>
</main>