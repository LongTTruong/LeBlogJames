<script>
    import { onDestroy, onMount } from 'svelte';
    import { movingLine, stationaryLines } from '../geometry/testCanvas.js';
    import * as THREE from 'three';

    
    let canvas;

    onMount(() => {
      // Scene, camera, and renderer setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
      const renderer = new THREE.WebGLRenderer({ canvas, alpha:true });
      renderer.setSize(window.innerWidth, window.innerHeight);

      camera.position.set(0, 0, 10); // Move the camera closer
      camera.lookAt(0, 0, 0); // Look at the center of the scene


      // schema for creating and inserting lines; not elegant right now, def rewriting later
            /* 
            horLineArray.push(new movingLine(2,4));
            horLineArray.forEach(element => {
              element.addToScene(scene);
            */
  
      let horLineArray = [];
      horLineArray.push(new movingLine(0,0));
      for (let i = 0; i < 8; i++ ) {
        //nice!
        horLineArray.push(new movingLine(2*Math.pow(0.5, i), 4*Math.pow(0.5,i)));
      }
      horLineArray.forEach(element => {
        element.addToScene(scene);
      });
    
      const vertLines = new stationaryLines(1);
      vertLines.addToScene(scene);

      renderer.render( scene, camera);

      const clock = new THREE.Clock();

      function animate() {
        const delta = clock.getDelta();
        horLineArray.forEach(element => {
          element.update(delta);
        });
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

      return() => {
        cancelAnimationFrame(animate);
      }
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
  