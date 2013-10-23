var Snow = function(scene) {

	var scene = scene;
	var snowGroup, snowEmitter;
	var maxAge = 15;

	init();

	function init() {
		snowGroup = new ShaderParticleGroup({
			texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
			maxAge: maxAge,
			blending: THREE.AdditiveBlending
		});

		snowEmitter = new ShaderParticleEmitter({
			position: new THREE.Vector3(0, 50, 1),
			positionSpread: new THREE.Vector3(200, 10, 10),
			velocitySpread: new THREE.Vector3(0, -2, 0),

			acceleration: new THREE.Vector3(0, -1, 0),
			accelerationSpread: new THREE.Vector3(4, 0.01, 4),


			colorStart: new THREE.Color('white'),
			colorEnd: new THREE.Color('white'),
			size: 3,
			sizeEnd: 2,
			opacityStart: 0,
			opacityMiddle: 1,
			opacityEnd: 0,

			particlesPerSecond: 600
		});
		snowGroup.addEmitter(snowEmitter);
		scene.add(snowGroup.mesh);

	}

	var tick = function(dt){
		snowGroup.tick(dt);
	}

	this.tick = tick;
}