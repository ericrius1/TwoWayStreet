var Body = function(scene, basePosX, basePosY) {

  // variables used in init()
  var scene = scene;
  var rootChakra, rootEmitter;
  var sacralChakra, sacralEmitter;
  var manipuraChakra, manipuraEmitter;
  var heartChakra, heartEmitter;
  var throatChakra, throatEmitter;
  var ajnaChakra, ajnaEmitter;
  var crownChakra, crownEmitter;

  var basePositionX = basePosX;  
  var basePositionY = basePosY;
  var increment = 2;
  var radius = .3;
  var size = 10;
  var maxAge = 4;
  var pps = 2000;
  var opacityStart = 0.05;
  var opacityMiddle = 0.1;
  var opacityEnd= 0.05;

  // Create particle group and rootEmitter

  var initParticles = function() {

    rootChakra = new ShaderParticleGroup({
      texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
      maxAge: maxAge
    });

    sacralChakra = new ShaderParticleGroup({
      texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
      maxAge: maxAge
    });

    manipuraChakra = new ShaderParticleGroup({
      texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
      maxAge: maxAge
    });

    heartChakra = new ShaderParticleGroup({
      texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
      maxAge: maxAge
    });


    throatChakra = new ShaderParticleGroup({
      texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
      maxAge: maxAge
    });

    ajnaChakra = new ShaderParticleGroup({
      texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
      maxAge: maxAge
    });

    crownChakra = new ShaderParticleGroup({
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
      size:  1,
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
      size:  1,
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
      size:  1,
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
      size:  1,
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
      size:  1,
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
      size:  1,
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
      size:  1,
      sizeEnd: 0,

      opacityStart: opacityStart,
      opacityMiddle: opacityMiddle,
      opacityEnd: opacityEnd,

      particlesPerSecond: pps
    });

    rootChakra.addEmitter(rootEmitter);
    sacralChakra.addEmitter(sacralEmitter);
    manipuraChakra.addEmitter(manipuraEmitter);
    heartChakra.addEmitter(heartEmitter);
    throatChakra.addEmitter(throatEmitter);
    ajnaChakra.addEmitter(ajnaEmitter);
    crownChakra.addEmitter(crownEmitter);
    scene.add(rootChakra.mesh);
    scene.add(sacralChakra.mesh);
    scene.add(manipuraChakra.mesh);
    scene.add(heartChakra.mesh);
    scene.add(throatChakra.mesh);
    scene.add(ajnaChakra.mesh);
    scene.add(crownChakra.mesh);

    document.querySelector('.numParticles').textContent =
      'Total particles: ' + rootEmitter.numParticles;
  }

  var tick = function(dt){
    rootChakra.tick(dt);
    sacralChakra.tick(dt);
    manipuraChakra.tick(dt);
    heartChakra.tick(dt);
    throatChakra.tick(dt);
    ajnaChakra.tick(dt);
    crownChakra.tick(dt);
  }
  this.initParticles = initParticles;
  this.tick = tick;

}