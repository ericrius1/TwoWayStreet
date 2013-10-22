var Stars = function(scene) {

	var scene = scene;
	var starGroup, starEmitter;
	var maxAge = 2;

	init();

	function init() {
		starGroup = new ShaderParticleGroup({
			texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
			maxAge: 2,
			blending: THREE.AdditiveBlending
		});

		starEmitter = new ShaderParticleEmitter({
			positionSpread: new THREE.Vector3(100, 100, 1000),
			velocitySpread: new THREE.Vector3(20, 20, 0),

			acceleration: new THREE.Vector3(0, -10, 0),

			velocity: new THREE.Vector3(0, 0, 10),

			colorStart: new THREE.Color('white'),
			colorEnd: new THREE.Color('white'),
			size: 2,
			sizeEnd: 2,
			opacityStart: 0,
			opacityMiddle: 1,
			opacityEnd: 0,

			particlesPerSecond: 10000
		});
		starGroup.addEmitter(starEmitter);
		scene.add(starGroup.mesh);

	}

	var tick = function(dt){
		starGroup.tick(dt);
	}

	this.tick = tick;
}