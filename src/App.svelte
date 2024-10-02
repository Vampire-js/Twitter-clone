<script>
  import {Router, Route} from 'svelte-routing'

  import Drawer from "./components/Drawer.svelte";
  import News from "./components/News.svelte";
  import Home from "./pages/Home.svelte";
  import About from './pages/About.svelte';
  import Login from './pages/Login.svelte';

</script>

<main>
<Router>
  <Route path="/" component={Login}></Route>
  <Route path="/home" component={Home}></Route>
  <Route path="/about" component={About}></Route>
</Router>

</main>


<style>
 
</style>
