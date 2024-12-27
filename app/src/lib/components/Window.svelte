<script>
    import { closeWindow } from '$lib/stores/windowStore.js'
	import TerminalOverlay from './TerminalOverlay.svelte';
    export let win;

    let Content;
    $: {
        if (win?.type) {
            import(`./windows/${win.type}.svelte`).then((module) => {
                Content = module.default;
            });
        }
    }

</script>

<div class="window" style="top: {win.top}; left: {win.left}">
    <header>
        <h2>{win.title}</h2>
        <button class ='hover:bg-brown' on:click={closeWindow(win.id)}>X</button>
    </header>
    <main>
        {#if Content}
        <svelte:component this={Content} {...win.props} />
        {/if}
    </main>
</div>