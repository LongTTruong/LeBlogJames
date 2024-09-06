<script>
    import "../lib/app.css";
    import Overlay from '$lib/Overlay.svelte'
    import { onMount } from 'svelte';

    let scanlineProps = [];
    let lineIndex = 0;
    const totalLines = 10;
    
    // this function throttles any function for performance reasons lol
    function throttle(fn, limit) {
        let lastFunc;
        let lastRan;
        return function(...args) {
            if (!lastRan) {
                fn(...args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(() => {
                    if ((Date.now() - lastRan) >= limit) {
                        fn(...args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        };
        
    }
    // Essentially, makes the scanlines flicker by "section". 
    // Kind of resource intensive, especially bc we update every 60 ms,
    // so i might work out a better optimization later.
    function updateScanlines() {
        const lineOpacity = Math.random() * 0.02 + 0.01; // Controlled random opacity for a subtle effect
        // Update properties for the current scanline
        scanlineProps[lineIndex] = { lineOpacity }
        // Move to the next line section
        lineIndex = (lineIndex + 1) % totalLines;
    }
    
    onMount(() => {
        //gets the mouse coords from client & updates the vignetteoverlay's css vars
        const updateVignettePosition = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            const vignetteOverlay = document.querySelector('.vignette-overlay');
            
            vignetteOverlay.style.setProperty('--mouse-x', `${mouseX}px`);
            vignetteOverlay.style.setProperty('--mouse-y', `${mouseY}px`);
    };

    const throttledUpdate = throttle(updateVignettePosition, 117);
    // initializes the scanlines so that it doesn't begin undefined
    scanlineProps = Array.from({ length: totalLines }, () => ({ lineOpacity: 0.05 }));
    window.addEventListener('mousemove', throttledUpdate);
    const interval = setInterval(updateScanlines, 117); // 
    
    return () => {
        clearInterval(interval);
        window.removeEventListener('mousemove', updateVignettePosition)
    }

  });

</script>

<!-- applies the vignette and scan line effect -->
<div class ="fixed inset-0 pointer-events-none z-50 vignette-overlay"></div>
{#each Array(totalLines) as _, i}
    <Overlay
    index={i}
    lineOpacity={scanlineProps[i]?.lineOpacity || 0.05}
    />
{/each}

<!-- nav bar -->
 <header class="fixed top-0 left-0 w-full h-16">
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
 </header>

<!-- Route content -->
<main class="pt-16">
    <slot></slot>
</main>

<!-- Final footer -->
<footer class = "p-4">
    <div class="container mx-auto text-center">
        <p>© 2000 This guy stinks</p>
    </div>
</footer>
