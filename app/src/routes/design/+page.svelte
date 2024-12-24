<script>
	import WindowManager from "$lib/components/WindowManager.svelte";
    import { addWindow } from '$lib/stores/windowStore.js';

    function openWindow() {
        addWindow({
            id: 'unique-id',
            type: 'test',
            top: '100px',
            left: '100px',
            props: { content: 'Hello World!' },
        });
    }

</script>

<main>
    <WindowManager/>
    <button on:click={openWindow}>Open Window</button>
</main>