import * as THREE from 'three';

export class box {
    constructor(boxSize=10) {
        this.boxSize = boxSize;

        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00});
        this.geometry = new THREE.BoxGeometry( 1*boxSize, 1*boxSize, 1*boxSize);
        this.mesh = new THREE.Mesh( this.geometry, this.material);
    }

    addToScene(scene) {
        scene.add(this.mesh);
    }

    removeFromScene(scene) {
        scene.remove(this.mesh);
    }
}

export class singleLine {
    constructor(speed=1) {
        this.speed = speed;
        this.material = new THREE.LineBasicMaterial({ color: 0x00ff00});

        const points = [];
        points.push (new THREE.Vector3 ( 0, 0, 0));
        points.push (new THREE.Vector3 ( -20, 0, 0));
        points.push (new THREE.Vector3 ( 20, 0, 0));
        this.geometry = new THREE.BufferGeometry().setFromPoints( points );

        this.mesh = new THREE.Line( this.geometry, this.material);
        this.position = this.mesh.position;
    }
    addToScene(scene) {
        scene.add(this.mesh);
    }
    removeFromScene(scene) {
        scene.remove(this.mesh);
    }

    update(deltaTime) {
        const position = this.mesh.position;
        for (let i = 0; i<5; i++) {
            position.y -= deltaTime*this.speed;
            if (position.y < -10) position.y = 10;
        }
    }
}


    
