<script>
	import { onMount } from "svelte";

    export let index;
    let scanlineProps = [];
    let lineIndex = 0;
    let lineSpacing = 2;
    let lineOpacity = 0.05;

    const totalLines = 10;
    
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

    function update() {
      const lineOpacity = Math.random() * 0.02 + 0.01; // Controlled random opacity for a subtle effect
        // Update properties for the current scanline
        scanlineProps[lineIndex] = { lineOpacity }
        // Move to the next line section
        lineIndex = (lineIndex + 1) % totalLines;
    }
  
    $: background = `
      repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, ${lineOpacity}),
        rgba(0, 0, 0, ${lineOpacity}) ${lineSpacing}px,
        rgba(0, 0, 0, ${lineOpacity * 1.5}) ${lineSpacing}px,
        rgba(0, 0, 0, ${lineOpacity * 1.5}) ${lineSpacing * 2}px
      )
    `;

    $: {
      lineOpacity = Math.random() * 0.05 + 0.01;
      scanlineProps[lineIndex] = { lineOpacity };
      lineIndex = (lineIndex + 1) % totalLines;
    }

    onMount(()=> {
      // initializes the scanlines so that it doesn't begin undefined
      scanlineProps = Array.from({ length: totalLines }, () => ({ lineOpacity: 0.05 }));
      const interval = setInterval(update, 117); // 
    
    return () => {
        clearInterval(interval);
    }
  });
  
  </script>
  
  <div
    class="freaky-overlay"
    style="background: {background}; z-index: {index+1};"
  ></div>
  
  <style>
    .freaky-overlay {
      position: fixed;
      height: 100%;
      width: 100%;
      background-attachment: scroll;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      pointer-events: none; /* Allows interaction with the content */
      top: 0;
      left: 0;
    }
  </style>