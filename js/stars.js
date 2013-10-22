var Stars = function(scene){

	var scene = scene;
	var starGroup, starEmitter;
	var maxAge = 5;

	init();

	function init() {
		starGroup = new ShaderParticleGroup({
			texture: THREE.ImageUtils.loadTexture('./img/star.png'),
			maxAge: maxAge,
			blending: THREE.AdditiveBlending
		});

		starEmitter = new ShaderParticleEmitter({
			type: "sphere",
			position: new THREE.Vector3(0, 30, 0),
			positionSpread: new THREE.Vector3(200, 30, 10),
			radius: 0.01,
			radiusScale: new THREE.Vector3(1,1,1),


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