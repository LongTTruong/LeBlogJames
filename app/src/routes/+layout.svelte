<script>
    import "../lib/app.css";
    import Scanline from '$lib/Scanline.svelte'
    import { onMount } from 'svelte';

    let scanlineProps = [];
    const totalLines = 10;
    let lineIndex = 0;

    function updateScanlines() {
        const lineOpacity = Math.random() * 0.05 + 0.01; // Controlled random opacity for a subtle effect
        // Update properties for the current scanline
        scanlineProps[lineIndex] = { lineOpacity };

        // Move to the next line section
        lineIndex = (lineIndex + 1) % totalLines;
    }


  onMount(() => {
    //Initialize lol
    scanlineProps = Array(totalLines).fill({lineOpacity: 0.05});

    // Update scanlines on mount and periodically
    updateScanlines();
    const interval = setInterval(updateScanlines, 200); // 
    return () => clearInterval(interval);
  });

</script>

<!-- applies the vignette and scan line effect -->
{#each Array(totalLines) as _, i}
    <Scanline
        index = {i}
        lineOpacity = {scanlineProps[i]?.lineOpacity || 0.05}
    />
{/each}

<!-- nav bar -->
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

<!-- Route content -->
<main>
    <slot></slot>
</main>

<!-- Final footer -->
<footer class = "p-4">
    <div class="container mx-auto text-center">
        <p>© 2000 This guy stinks</p>
    </div>
</footer>
