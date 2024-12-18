<script>
	import TerminalOverlay from "$lib/components/TerminalOverlay.svelte";
    import MainScene from "$lib/components/ThreeJS/scenes/MainScene.svelte";
</script>

<main>
    {#each Array(10) as _,i}
        <TerminalOverlay index={i}/>
    {/each}
    <MainScene/>
    
</main>