var Stars = function(scene) {

	var scene = scene;
	var starGroup, starEmitter;
	var maxAge = 5;

	var rand = Math.random;
	init();

	function init() {
		starGroup = new ShaderParticleGroup({
			texture: THREE.ImageUtils.loadTexture('./img/star.png'),
			maxAge: maxAge,
			blending: THREE.AdditiveBlending
		});



		for (var i = 0; i < 100; i++) {

			var xPos = -100 + rand() * 200;
			var yPos = 20 + rand() * 20;
	
			starEmitter = new ShaderParticleEmitter({
				type: "sphere",
				position: new THREE.Vector3(xPos, yPos, 0),
				radius: 0.1,


				colorStart: new THREE.Color('white'),
				colorEnd: new THREE.Color('white'),
				size: 1,
				sizeEnd: 1,
				opacityStart: 0,
				opacityMiddle: 1,
				opacityEnd: 0,
				emitterDuration: Math.random() * 20,

				particlesPerSecond: 100
			});	
			starGroup.addEmitter(starEmitter);
			scene.add(starGroup.mesh);
		}

	}

	var tick = function(dt) {
		starGroup.tick(dt);
	}

	this.tick = tick;
}