<script>
    export let index;
    export let lineSpacing = 2;
    export let lineOpacity = 0.05;
  
    $: background = `
      repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, ${lineOpacity}),
        rgba(0, 0, 0, ${lineOpacity}) ${lineSpacing}px,
        rgba(0, 0, 0, ${lineOpacity * 1.5}) ${lineSpacing}px,
        rgba(0, 0, 0, ${lineOpacity * 1.5}) ${lineSpacing * 2}px
      )
    `;
  </script>
  
  <div
    class="scanline-overlay"
    style="background: {background}; z-index: {index + 1};"
  ></div>
  
  <style>
    .scanline-overlay {
      position: fixed;
      height: 100%;
      width: 100%;
      pointer-events: none; /* Allows interaction with the content */
      top: 0;
      left: 0;
    }
  </style>