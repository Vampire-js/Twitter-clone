<script>
  import Tweet from "../js/MakeTweet.js";


    let content = ""
    
</script>

<main>
  <div class="p-4 border-b-8 border-b-gray-800">
    <div class="flex">
      <input
        type="text"
        bind:value={content}
        class="bg-gray-800 w-full p-3 rounded-2xl"
        placeholder="What's happening ..."
      />
      <button class="btn bg-sky-500 p-3 rounded-full ml-2" on:click={() => Tweet(content)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
    </button>
    </div>
  </div>
</main>
