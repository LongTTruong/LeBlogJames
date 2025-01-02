<script>
    import "../lib/app.css";
    import MainScene from '$lib/components/ThreeJS/scenes/MainScene.svelte';
	import WindowManager from "$lib/components/WindowManager.svelte";
    import { onMount } from 'svelte';

</script>


<!-- nav bar -->
 <header class="fixed top-0 left-0 w-full h-16">
     <nav class = "p-4">
         <div class ="container mx-auto flex justify-between items-center">
             <a href="/" class="hover:bg-brown px-3 py-2 rounded">Busting nuts</a>
             <div class="space-x-4">
                 <a href="/design" class="hover:bg-brown px-3 py-2 rounded">Design</a>
                 <a href="/blog" class ="hover:bg-brown px-3 py-2 rounded">Prose</a>
                 <a href="/portfolio" class ="hover:bg-brown px-3 py-2 rounded">Portfolio</a>
             </div>
         </div>
     </nav>
 </header>

<!-- Route content -->
<main class="pt-16">
    <slot/>
    <WindowManager/>
    <MainScene/>
</main>

<!-- Final footer -->
<footer class = "p-4">
    <div class="container mx-auto text-center ">
        <p>© 2000 This guy stinks</p>
    </div>
</footer>