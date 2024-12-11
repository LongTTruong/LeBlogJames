import * as THREE from 'three';

export class DynamicGrid {
    constructor(instanceCount = 100) {
        this.instanceCount = instanceCount;

        // Shader Material
        this.material = new THREE.ShaderMaterial({
            vertexShader: `
                attribute vec3 instancePosition;
                varying float glowIntensity;

                void main() {
                    vec3 transformed = position + instancePosition;
                    glowIntensity = 1.0 - abs(position.y); // Glow effect
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
                }
            `,
            fragmentShader: `
                varying float glowIntensity;

                void main() {
                    vec3 glowColor = vec3(0.0, 1.0, 0.0); // Green glow
                    float intensity = pow(glowIntensity, 2.0); // Control falloff
                    gl_FragColor = vec4(glowColor * intensity, 1.0);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
        });

        // Geometry for the grid
        const lineGeometry = new THREE.BufferGeometry();
        const lineVertices = new Float32Array([
            0, 0, 0,  // Start point
            0, 1, 0   // End point
        ]);
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(lineVertices, 3));

        // Instanced Geometry
        this.geometry = new THREE.InstancedBufferGeometry();
        this.geometry.copy(lineGeometry);

        // Add instance positions
        const instancePositions = new Float32Array(this.instanceCount * 3);
        for (let i = 0; i < this.instanceCount; i++) {
            instancePositions[i * 3 + 0] = Math.random() * 10 - 5; // x
            instancePositions[i * 3 + 1] = 0;                     // y
            instancePositions[i * 3 + 2] = Math.random() * -10;   // z
        }
        this.geometry.setAttribute(
            'instancePosition',
            new THREE.InstancedBufferAttribute(instancePositions, 3)
        );
        // Create Mesh
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    // Update logic for animation
    update(deltaTime) {
        const instancePositions = this.geometry.attributes.instancePosition.array;
        for (let i = 0; i < this.instanceCount; i++) {
            instancePositions[i * 3 + 2] += deltaTime * 2; // Move forward
            if (instancePositions[i * 3 + 2] > 5) instancePositions[i * 3 + 2] = -10; // Reset
        }
        this.geometry.attributes.instancePosition.needsUpdate = true;
    }

    // Add to scene
    addToScene(scene) {
        scene.add(this.mesh);
    }

    // Remove from scene
    removeFromScene(scene) {
        scene.remove(this.mesh);
    }
}
