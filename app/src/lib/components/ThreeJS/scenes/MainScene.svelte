<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import { DynamicGrid } from '../geometry/DynamicGrid.js';
    
    let canvas;

    onMount(() => {
      // Scene, camera, and renderer setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
      const renderer = new THREE.WebGLRenderer({ canvas, alpha:true });
      renderer.setSize(window.innerWidth, window.innerHeight);

      camera.position.set(0, 0, 10); // Move the camera closer
      camera.lookAt(0, 0, 0); // Look at the center of the scene

      const grid = new DynamicGrid(100);
      grid.addToScene(scene);

      renderer.render( scene, camera);

      const clock = new THREE.Clock();

      function animate() {
        const delta = clock.getDelta();
        grid.update(delta);
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }

      // Handle window resize
      window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      });

      animate();

    });
  </script>
  
  <style>
    canvas {
        position: fixed;
        height: 100%;
        width: 100%;
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-position: center;
        pointer-events: none; /* Allows interaction with the content */
        top: 0;
        left: 0;
    }
  </style>
  
  <canvas bind:this={canvas}></canvas>
  