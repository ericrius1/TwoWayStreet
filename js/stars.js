var Stars = function(scene) {

	var scene = scene;
	var starGroup, starEmitter;
	var maxAge = 5;

	init();

	function init() {
		starGroup = new ShaderParticleGroup({
			texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
			maxAge: maxAge,
			blending: THREE.AdditiveBlending
		});

		starEmitter = new ShaderParticleEmitter({
			positionSpread: new THREE.Vector3(200, 100, 100),
			//velocitySpread: new THREE.Vector3(20, 10, 10),

			acceleration: new THREE.Vector3(0, -10, 0),
			accelerationSpread: new THREE.Vector3(4, 2, 4),


			colorStart: new THREE.Color('white'),
			colorEnd: new THREE.Color('white'),
			size: 2,
			sizeEnd: 2,
			opacityStart: 0,
			opacityMiddle: 1,
			opacityEnd: 0,

			particlesPerSecond: 1000
		});
		starGroup.addEmitter(starEmitter);
		scene.add(starGroup.mesh);

	}

	var tick = function(dt){
		starGroup.tick(dt);
	}

	this.tick = tick;
}