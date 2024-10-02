<script>
  import { onMount } from "svelte";
  import Logo from "../assets/logo.svg";
  import Tweet from "../js/MakeTweet.js";
  // let links = ["Home", "Explore", "Notifications", "Messages", "Communities", "About", "Mode", "Profile"];
  let links = [
    {
      name:"Home",
      icon:"home-outline"
    },
    {
      name: "Explore",
      icon:"time-outline"
    },
    {
      name:"Notifications",
      icon:"notifications-outline"
    },
    {
      name:"Messages",
      icon:"chatbox-outline"
    },
    {
      name:"Communities",
      icon:"people-outline"
    },
    {
      name:"Profile",
      icon:"person-outline"
    }
  ]

</script>

<main class="hidden md:block md:col-span-3 p-5">
  <div class="logo">
    <img src={Logo} class="w-10 mb-4" alt="" />
  </div>
  {#each links as link}
    <div
      class="btn w-fill p-3 bg-transparent text-xl font-bold rounded-full transition-all hover:bg-gray-800 flex items-center"
    >
  <ion-icon class="text-2xl mr-3" name={link.icon}></ion-icon>
<span class="font-bold">{link.name}</span>
    </div>
  {/each}
  <button
    class="btn w-full text-center mt-5 p-3 bg-sky-500 text-xl font-bold rounded-full transition-all hover:bg-sky-600"
    
  >
    Tweet
  </button>
</main>
