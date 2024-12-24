<script>
    import { onMount } from 'svelte';
    import { movingLine, allStationaryLines } from '../geometry/testCanvas.js';
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
      
      
      // this is how instantation of the lines below works basically
      /* 
      horLineArray.push(new movingLine(speedOfLine, initialPositionOfLine));
      horLineArray.forEach(element => {
        element.addToScene(scene);
        */
       
       let horLineArray = [];
       
       //initial stationary horizon line
       horLineArray.push(new movingLine(0,0));
       
       //could rewrite the below section to be less esoteric (with variable and function names)
       //8 total lines 

      for (let i = 0; i < 8; i++ ) {
          //nice! 2 = max speed of the lines. 4 = closest initial positon of closest line
          horLineArray.push(new movingLine(2*Math.pow(0.5, i), 4*Math.pow(0.5,i)));
        }

      horLineArray.forEach(element => {
          element.addToScene(scene);
        });
        
      //all vertical lines are created at once and added to scene here
      const vertLines = new allStationaryLines(1).addToScene(scene);

      //once the scene is set up, render everything at once initially.
      //further updates will come from the animate() function
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
        pointer-events: none;
        top: 0;
        left: 0;
    }
  </style>
  
  <canvas bind:this={canvas}></canvas>
  