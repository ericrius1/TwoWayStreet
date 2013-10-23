var Body = function(scene, basePosX, basePosY) {

  // variables used in init()
  var scene = scene;
  var chakraGroup;
  var rootEmitter,
    sacralEmitter,
    manipuraEmitter,
    heartEmitter,
    throatEmitter,
    ajnaEmitter,
    crownEmitter;

  var basePositionX = basePosX;
  var basePositionY = basePosY;
  var increment = 2;
  var radius = .3;
  var size = 10;
  var maxAge = 4;
  var pps = 2000;
  var opacityStart = 0.05;
  var opacityMiddle = 0.1;
  var opacityEnd = 0.05;
  var chakraGroup;

  // Create particle group and rootEmitter

  var initParticles = function() {
    console.log('init')

    chakraGroup = new ShaderParticleGroup({
      texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
      maxAge: maxAge
    });



    //****ROOOOT******
    rootEmitter = new ShaderParticleEmitter({
      type: 'sphere',
      position: new THREE.Vector3(basePositionX, basePositionY, 0),

      radius: radius,
      speed: 2,

      colorStart: new THREE.Color('red'),
      colorSpread: new THREE.Vector3(0, 0.5, 0),
      colorEnd: new THREE.Color('red'),
      size: 1,
      sizeEnd: 0,

      opacityStart: opacityStart,
      opacityMiddle: opacityMiddle,
      opacityEnd: opacityEnd,

      particlesPerSecond: pps
    });


    //*****SACRAL**********
    sacralEmitter = new ShaderParticleEmitter({
      type: 'sphere',

      position: new THREE.Vector3(basePositionX, basePositionY + increment, 0),

      radius: radius,
      speed: 2,

      colorStart: new THREE.Color('#ED8326'),
      // colorSpread: new THREE.Vector3(.2, 0.2, 0.2),
      colorEnd: new THREE.Color('#ED8324'),
      size: 1,
      sizeEnd: 0,

      opacityStart: opacityStart,
      opacityMiddle: opacityMiddle,
      opacityEnd: opacityEnd,

      particlesPerSecond: pps
    });

    //*****MANUPURA**********
    manipuraEmitter = new ShaderParticleEmitter({
      type: 'sphere',

      position: new THREE.Vector3(basePositionX, basePositionY + (increment * 2), 0),

      radius: radius,
      speed: 2,

      colorStart: new THREE.Color('yellow'),
      colorSpread: new THREE.Vector3(.1, .1, .1),
      colorEnd: new THREE.Color('yellow'),
      size: 1,
      sizeEnd: 0,

      opacityStart: opacityStart,
      opacityMiddle: opacityMiddle,
      opacityEnd: opacityEnd,

      particlesPerSecond: pps
    });

    //*****HEART**********
    heartEmitter = new ShaderParticleEmitter({
      type: 'sphere',

      position: new THREE.Vector3(basePositionX, basePositionY + (increment * 3), 0),

      radius: radius,
      speed: 2,

      colorStart: new THREE.Color('green'),
      colorSpread: new THREE.Vector3(0.5, 0.5, 0.5),
      colorEnd: new THREE.Color('green'),
      size: 1,
      sizeEnd: 0,

      opacityStart: opacityStart,
      opacityMiddle: opacityMiddle,
      opacityEnd: opacityEnd,

      particlesPerSecond: pps
    });

    //*****THROAT**********
    throatEmitter = new ShaderParticleEmitter({
      type: 'sphere',

      position: new THREE.Vector3(basePositionX, basePositionY + (increment * 4), 0),

      radius: radius,
      speed: 2,

      colorStart: new THREE.Color('blue'),
      colorSpread: new THREE.Vector3(1, 1, 1),
      colorEnd: new THREE.Color('blue'),
      size: 1,
      sizeEnd: 0,

      opacityStart: opacityStart,
      opacityMiddle: opacityMiddle,
      opacityEnd: opacityEnd,

      particlesPerSecond: pps
    });

    //*****AJNA**********
    ajnaEmitter = new ShaderParticleEmitter({
      type: 'sphere',

      position: new THREE.Vector3(basePositionX, basePositionY + (increment * 5), 0),

      radius: radius,
      speed: 2,

      colorStart: new THREE.Color('purple'),
      colorSpread: new THREE.Vector3(2, 2, 2),
      colorEnd: new THREE.Color('purple'),
      size: 1,
      sizeEnd: 0,

      opacityStart: opacityStart,
      opacityMiddle: opacityMiddle,
      opacityEnd: opacityEnd,

      particlesPerSecond: pps
    });

    //*****CROWN**********
    crownEmitter = new ShaderParticleEmitter({
      type: 'sphere',

      position: new THREE.Vector3(basePositionX, basePositionY + (increment * 6), 0),

      radius: radius,
      speed: 2,

      colorStart: new THREE.Color('violet'),
      colorSpread: new THREE.Vector3(1, 1, 1),
      colorEnd: new THREE.Color('violet'),
      size: 1,
      sizeEnd: 0,

      opacityStart: opacityStart,
      opacityMiddle: opacityMiddle,
      opacityEnd: opacityEnd,

      particlesPerSecond: pps
    });

    chakraGroup.addEmitter(rootEmitter);
    chakraGroup.addEmitter(sacralEmitter);
    chakraGroup.addEmitter(manipuraEmitter);
    chakraGroup.addEmitter(heartEmitter);
    chakraGroup.addEmitter(throatEmitter);
    chakraGroup.addEmitter(ajnaEmitter);
    chakraGroup.addEmitter(crownEmitter);
    scene.add(chakraGroup.mesh);

  }

  var tick = function(dt) {
    chakraGroup.tick(dt);
  }
  this.initParticles = initParticles;
  this.tick = tick;

}