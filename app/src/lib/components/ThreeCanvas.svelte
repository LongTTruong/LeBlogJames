<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    
    let canvas;
  
    onMount(() => {
      // Scene, camera, and renderer setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas, alpha:true });
      renderer.setSize(window.innerWidth, window.innerHeight);

      const material = new THREE.LineBasicMaterial ({ color: 0x000000 });
      const gridSize = 100;
      const points = [];
      for (let i = -gridSize;i<=gridSize;i+=1) {
        points.push( new THREE.Vector3())
        points.push( new THREE.Vector3())
        points.push( new THREE.Vector3())
      }

      console.log(points);
      const geometry = new THREE.BufferGeometry().setFromPoints( points );
      const line = new THREE.LineSegments( geometry, material );
      scene.add(line);
      
      
      camera.position.set(0,0,100);
      camera.lookAt(0,0,0); 
      renderer.render( scene, camera);


      // Handle window resize
      window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      });

      // window.addEventListener('mousemove', (e) => {
      //   let mouseX = e.clientX/innerWidth;
      //   let mouseY = e.clientY/innerHeight;
      // });
      
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
  