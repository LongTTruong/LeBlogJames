<script>
    export let index;
    export let lineSpacing = 2;
    export let lineOpacity = 0.5;
  
    $: background = `
      repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, ${lineOpacity}),
        rgba(0, 0, 0, ${lineOpacity}) ${lineSpacing}px,
        rgba(0, 0, 0, ${lineOpacity * 2}) ${lineSpacing}px,
        rgba(0, 0, 0, ${lineOpacity * 2}) ${lineSpacing * 2}px
      ),
        radial-gradient(
        circle farthest-corner,  
        rgba(0, 0, 0, 0) 75%,
        rgba(0, 0, 0, 0.01),
        rgba(0, 0, 0, 0.05) 100%
      )
    `;
  </script>
  
  <div
    class="freaky-overlay"
    style="background: {background}; z-index: {index + 1};"
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