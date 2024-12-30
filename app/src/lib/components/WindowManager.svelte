<script>
    import { get } from 'svelte/store';
    import Window from './Window.svelte';
	import { onDestroy } from 'svelte';
    import { windowStore, addWindow, closeWindow } from '../stores/windowStore.js';

    $: windows = $windowStore;

</script>

<!-- this component will also handle routing logic. -->
<div class="window-manager">
    {#each windows as win (win.id)}
    <Window {win}/>
    {/each}
</div>
