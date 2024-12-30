<script>
    import { closeWindow } from '$lib/stores/windowStore.js'
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
<!-- this component will contain all of the gui logic. front end styling will be derived from /windows, route content
 will be passed along from the windowmanager -->
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