var Snow = function(scene) {

	var scene = scene;
	var snowGroup, snowEmitter;
	var maxAge = 5;

	init();

	function init() {
		snowGroup = new ShaderParticleGroup({
			texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
			maxAge: maxAge,
			blending: THREE.AdditiveBlending
		});

		snowEmitter = new ShaderParticleEmitter({
			position: new THREE.Vector3(0, 100, 1),
			positionSpread: new THREE.Vector3(200, 10, 10),
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
		snowGroup.addEmitter(snowEmitter);
		scene.add(snowGroup.mesh);

	}

	var tick = function(dt){
		snowGroup.tick(dt);
	}

	this.tick = tick;
}