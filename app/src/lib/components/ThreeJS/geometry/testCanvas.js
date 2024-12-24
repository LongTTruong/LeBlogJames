import * as THREE from 'three';

export class movingLine {
    
    constructor(speed=1, initialPos=0) {

        this.speed = speed;
        //this is gonna be jank, but gonna make it neg bc of reference from horizon
        this.initialPos = -initialPos;
        this.material = new THREE.LineBasicMaterial({ color: 0x1c1c1c});

        const points = [];
        points.push (new THREE.Vector3 ( 0, 0, 0));
        points.push (new THREE.Vector3 ( -17, 0, 0));
        points.push (new THREE.Vector3 ( 17, 0, 0));
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
            if (position.y < (this.initialPos*2)) position.y = this.initialPos;
        }
    }

}

export class allStationaryLines {
    //this shit looks like garbage; one day i will refactor lol
    constructor(spacing = 1,lineLength = 10, vanishingPoint = new THREE.Vector3(0,10,-250)) {

        this.spacing = spacing;
        this.material = new THREE.LineBasicMaterial({color : 0x1c1c1c});
        this.meshList = [];

        const vertices = [];

        for (let i = 0; i < 18; i++ ) {
            let start = new THREE.Vector3(i * spacing, 0, 0); // Base position
            let direction = new THREE.Vector3().subVectors(vanishingPoint, start).normalize();
            //line length is neg bc it should be below the "horizon" (y=0)
            let end = start.clone().add(direction.multiplyScalar(-lineLength));

            vertices.push(start.x, start.y, start.z);
            vertices.push(end.x, end.y, end.z);

            // Negative side
            start = new THREE.Vector3(-i * spacing, 0, 0); // Base position
            direction = new THREE.Vector3().subVectors(vanishingPoint, start).normalize();
            //line length is neg bc it should be below the "horizon" (y=0)
            end = start.clone().add(direction.multiplyScalar(-lineLength));

            vertices.push(start.x, start.y, start.z);
            vertices.push(end.x, end.y, end.z);
        }   

        this.geometry = new THREE.BufferGeometry;
        this.geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

        const linesegments = new THREE.LineSegments(this.geometry, this.material);
        this.meshList.push(linesegments);
    }

    addToScene(scene) {
        this.meshList.forEach(element => {
            scene.add(element);
        });
    }

    removeFromScene(scene) {
        this.meshList.forEach(element => {
            scene.remove(element);
        });
    }
}

    
