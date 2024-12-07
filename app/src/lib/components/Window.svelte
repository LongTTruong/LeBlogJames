<script>
    export let win;

    let Content;
    import('./windows/${win.type}.svelte').then((module) =>{
        Content = module.default;
    });
</script>

<div class="window" style="top:{win.top}; left: {win.left}">
    <header>
        <h2>{win.title}</h2>
        <button on:click={()=> win.close()}>X</button>
    </header>
    <main>
        {#if Content}
            <svelte:component this={Content} {...win.props}/>
        {/if}
    </main>
</div>
