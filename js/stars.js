var Stars = function(scene) {

	var scene = scene;
	var starGroup, starEmitter;
	var maxAge = 1;

	var rand = Math.random;
	var starEmitters = [];
	init();

	function init() {
		starGroup = new ShaderParticleGroup({
			texture: THREE.ImageUtils.loadTexture('./img/star.png'),
			maxAge: maxAge,
			blending: THREE.AdditiveBlending
		});



		for (var i = 0; i < 100; i++) {

			var xPos = -100 + rand() * 200;
			var yPos = 20 + rand() * 20 
			var zPos = -10 + rand() * 20
	
			starEmitter = new ShaderParticleEmitter({
				type: "sphere",
				position: new THREE.Vector3(xPos, yPos, 0),
				radius: 200,
                radiusScale: new THREE.Vector3(1, 1, 1),
				speed: 0,

				colorStart: new THREE.Color('white'),
				colorEnd: new THREE.Color('white'),
				size: 1,
				sizeEnd: 1,
				opacityStart: 0,
				opacityMiddle: 1,
				opacityEnd: 0,
				emitterDuration: Math.random() * 200,

				particlesPerSecond: 500
			});	
			starEmitters.push(starEmitter);
			starGroup.addEmitter(starEmitter);
			scene.add(starGroup.mesh);
		}

	}

	function updateEmitters(){
		 var x = Date.now() * 0.0009,
         y = Date.now() * 0.0005;

		for(var i = 0; i < starEmitters.length; i++){
            starEmitters[i].radiusScale.x = Math.sin(x);
            starEmitters[i].radiusScale.y = Math.cos(y);
		}
	}

	var tick = function(dt) {
		updateEmitters();
		starGroup.tick(dt);
	}

	this.tick = tick;
}