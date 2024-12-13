<script>
	import TerminalOverlay from "$lib/components/TerminalOverlay.svelte";
    import MainScene from "$lib/components/ThreeJS/scenes/MainScene.svelte";
</script>

<main>
    <div class="relative h-screen">
        <div class="absolute top-1/2 left-1/2 transform translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500">
    {#each Array(10) as _,i}
    <TerminalOverlay index={i}/>
     {/each}
     </div>
     </div>
</main>