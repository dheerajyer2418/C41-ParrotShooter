var backgroundImg;
var gunImg;
var scenery;
var gun;
var parrotImg,parrot, parrotGroup;
var bullet, bulletImg, bulletGroup;

function preload(){
  backgroundImg = loadImage("background.jpg");
  gunImg = loadImage("gun.png");
  parrotImg = loadAnimation("parrot.jpg","parrot1.jpg","parrot1.jpg");
  bulletImg = loadImage("bullet.jpg");
  
}
function setup() {
  var canvas = createCanvas(displayWidth, displayHeight-130);
  parrotGroup = new Group();
  bulletGroup = new Group();
  //background image
  scenery = createSprite(displayWidth/2,displayHeight/4,displayWidth,displayHeight-130);
  scenery.addImage(backgroundImg);
  scenery.scale = 0.375;
  scenery.x = displayWidth/2;
  scenery.velocityX = -4;

  //gun
  gun = createSprite(displayWidth/2, displayHeight/1.5,displayWidth,displayHeight);
  gun.addImage(gunImg);
  gun.scale = 0.5;
}

function draw() {
  //background(backgroundImg);
  if(scenery.x <400){
    scenery.x = displayWidth/2;
  }

  spawnParrots();
  bullets();
  drawSprites();
}

function spawnParrots(){

  if(frameCount % 80 === 0){
    //parrot with animation
    parrot = createSprite(displayWidth/4,Math.round(random (displayHeight/5, displayHeight/2)), displayWidth, displayHeight);
    parrot.addAnimation("running", parrotImg);
    parrot.scale = 0.1;
    parrot.velocityX = 2;
    parrot.depth = scenery.depth;
    parrot.depth = parrot.depth + 1;
    parrot.lifetime = Math.round(displayWidth/2);
    parrotGroup.add(parrot);
  }

  
}

function bullets(){
  bullet = createSprite(displayWidth/2, displayHeight/1.8,displayWidth,displayHeight);
  bullet.addImage(bulletImg);
  bullet.scale = 0.1;
  bulletsGroup.add(bullet);
}