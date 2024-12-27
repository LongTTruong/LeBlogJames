<script>
	import WindowManager from "$lib/components/WindowManager.svelte";
    import { addWindow } from '$lib/stores/windowStore.js';

    function openWindow(type) {
        addWindow({
            id: 'unique-id-' + type,
            type: type,
            title: type,
            top: '100px',
            left: '100px',
            props: { content: `This is a ${type} window!` },
        });
    }

</script>

<main>
    <button class ='hover:bg-brown' on:click={() => openWindow('test1')}>Open test1</button>
    <button class ='hover:bg-brown' on:click={() => openWindow('test2')}>Open test2</button>
    <button class ='hover:bg-brown' on:click={() => openWindow('blog')}>Open testBlog</button>
</main>