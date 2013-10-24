var Stars = function(scene) {

  var scene = scene;
  var starGroup, starEmitter;
  var maxAge = 4;
  var numStarGroups = 40;
  var radius = 30;
  var rand = Math.random;
  var starEmitters = [];
  setTimeout(init, 26500);


  function init() {
    starGroup = new ShaderParticleGroup({
      texture: THREE.ImageUtils.loadTexture('./img/star.png'),
      maxAge: maxAge,
      blending: THREE.AdditiveBlending
    });



    for (var i = 0; i < numStarGroups; i++) {

      var xPos = -100 + rand() * 200;
      var yPos = 20 + rand() * 20
      var zPos = -10 + rand() * 20

      starEmitter = new ShaderParticleEmitter({
        type: "sphere",
        position: new THREE.Vector3(xPos, 45, zPos),
        radius: radius,
        radiusScale: new THREE.Vector3(1, 1, 1),
        speed: 0,

        colorStart: new THREE.Color('white'),
        colorEnd: new THREE.Color('purple'),
        size: 7,
        sizeEnd: 1,
        opacityStart: 0,
        opacityMiddle: 0.9,
        opacityEnd: 0,

        particlesPerSecond: 100 + Math.random() *  500
      });
      starEmitters.push(starEmitter);
      starGroup.addEmitter(starEmitter);
      scene.add(starGroup.mesh);
    }

  }

  function updateEmitters() {
    var x = Date.now() * 0.00009;

    for (var i = 0; i < starEmitters.length; i++) {

      starEmitters[i].radiusScale.x = Math.sin(x)*10;
      //starEmitters[i].radiusScale.y = Math.sin(y);
    }
  }

  var tick = function(dt) {
    updateEmitters();
    starGroup && starGroup.tick(dt);
  }

  this.tick = tick;
}