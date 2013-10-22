var Body = function(scene) {

  // variables used in init()
  var scene = scene;
  var rootChakra, rootEmitter;
  var sacralChakra, sacralEmitter;
  var manipuraChakra, manipuraEmitter;
  var heartChakra, heartEmitter;
  var throatChakra, throatEmitter;
  var ajnaChakra, ajnaEmitter;
  var crownChakra, crownEmitter;

  var basePosition = -30;
  var increment = 10;
  var radius = 3;

  // Create particle group and rootEmitter

  var initParticles = function() {

    rootChakra = new ShaderParticleGroup({
      texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
      maxAge: 2
    });

    sacralChakra = new ShaderParticleGroup({
      texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
      maxAge: 2
    });

    manipuraChakra = new ShaderParticleGroup({
      texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
      maxAge: 2
    });

    heartChakra = new ShaderParticleGroup({
      texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
      maxAge: 2
    });


    throatChakra = new ShaderParticleGroup({
      texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
      maxAge: 2
    });

    ajnaChakra = new ShaderParticleGroup({
      texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
      maxAge: 2
    });

    crownChakra = new ShaderParticleGroup({
      texture: THREE.ImageUtils.loadTexture('./img/smokeparticle.png'),
      maxAge: 2
    });



    //****ROOOOT******
    rootEmitter = new ShaderParticleEmitter({
      type: 'sphere',

      position: new THREE.Vector3(0, basePosition, 0),

      radius: radius,
      speed: 2,

      colorStart: new THREE.Color('red'),
      colorSpread: new THREE.Vector3(0, 0.5, 0),
      colorEnd: new THREE.Color('red'),
      size: 5,
      sizeEnd: 0,

      opacityStart: 0,
      opacityMiddle: 1,
      opacityEnd: 0,

      particlesPerSecond: 5000
    });


    //*****SACRAL**********
    sacralEmitter = new ShaderParticleEmitter({
      type: 'sphere',

      position: new THREE.Vector3(0, basePosition + increment, 0),

      radius: radius,
      speed: 2,

      colorStart: new THREE.Color('#ED8326'),
      // colorSpread: new THREE.Vector3(.2, 0.2, 0.2),
      colorEnd: new THREE.Color('#ED8324'),
      size: 5,
      sizeEnd: 0,

      opacityStart: 0,
      opacityMiddle: 1,
      opacityEnd: 0,

      particlesPerSecond: 5000
    });

    //*****MANUPURA**********
    manipuraEmitter = new ShaderParticleEmitter({
      type: 'sphere',

      position: new THREE.Vector3(0, basePosition + (increment * 2), 0),

      radius: radius,
      speed: 2,

      colorStart: new THREE.Color('yellow'),
      colorSpread: new THREE.Vector3(.1, .1, .1),
      colorEnd: new THREE.Color('yellow'),
      size: 5,
      sizeEnd: 0,

      opacityStart: 0,
      opacityMiddle: 1,
      opacityEnd: 0,

      particlesPerSecond: 5000
    });

    //*****HEART**********
    heartEmitter = new ShaderParticleEmitter({
      type: 'sphere',

      position: new THREE.Vector3(0, basePosition + (increment * 3), 0),

      radius: radius,
      speed: 2,

      colorStart: new THREE.Color('green'),
      colorSpread: new THREE.Vector3(0.5, 0.5, 0.5),
      colorEnd: new THREE.Color('green'),
      size: 5,
      sizeEnd: 0,

      opacityStart: 0,
      opacityMiddle: 1,
      opacityEnd: 0,

      particlesPerSecond: 5000
    });

    //*****THROAT**********
    throatEmitter = new ShaderParticleEmitter({
      type: 'sphere',

      position: new THREE.Vector3(0, basePosition + (increment * 4), 0),

      radius: radius,
      speed: 2,

      colorStart: new THREE.Color('blue'),
      colorSpread: new THREE.Vector3(1, 1, 1),
      colorEnd: new THREE.Color('blue'),
      size: 5,
      sizeEnd: 0,

      opacityStart: 0,
      opacityMiddle: 1,
      opacityEnd: 0,

      particlesPerSecond: 5000
    });

    //*****AJNA**********
    ajnaEmitter = new ShaderParticleEmitter({
      type: 'sphere',

      position: new THREE.Vector3(0, basePosition + (increment * 5), 0),

      radius: radius,
      speed: 2,

      colorStart: new THREE.Color('purple'),
      colorSpread: new THREE.Vector3(2, 2, 2),
      colorEnd: new THREE.Color('purple'),
      size: 5,
      sizeEnd: 0,

      opacityStart: 0,
      opacityMiddle: 1,
      opacityEnd: 0,

      particlesPerSecond: 5000
    });

    //*****CROWN**********
    crownEmitter = new ShaderParticleEmitter({
      type: 'sphere',

      position: new THREE.Vector3(0, basePosition + (increment * 6), 0),

      radius: radius,
      speed: 2,

      colorStart: new THREE.Color('violet'),
      colorSpread: new THREE.Vector3(1, 1, 1),
      colorEnd: new THREE.Color('violet'),
      size: 5,
      sizeEnd: 0,

      opacityStart: 0,
      opacityMiddle: 1,
      opacityEnd: 0,

      particlesPerSecond: 5000
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