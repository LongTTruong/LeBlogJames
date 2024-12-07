<script>
    import { get } from 'svelte/store';
    import { windowStore } from '../stores/windowStore';
    import { Window } from './Window.svelte';

    const windows = get(windowStore);
</script>

<div class="window-manager">
    {#each windows as win (win.id)}
    <Window {win}/>
    {/each}
</div>