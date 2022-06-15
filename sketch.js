var b1,b2,b3,b4,b5;
var start;
var road1,road2,road3,road4,road5,road6,road7,road8,road9,road10,road11,road12,road13,road14,road15,road16;
var road17,road18,road19,road20,road21,road22,road23,road24,road25,road26,road27,road28,road29,road30,road31
,road32;
var b1Image;
var player;
var bluemonster;
var invb1;
var bullet,bulletGroup;
var monsterGroup;
function preload(){
 b1Image = loadImage("b1.png");
}

function setup() {
  createCanvas(1650,750);
  bulletGroup = new Group();
  monsterGroup = new Group();
  b1 = createSprite(150, 580,400,150);
  b1.shapeColor="yellow";
  b1.addImage(b1Image);
  b1.scale=0.6
  //b2 = createSprite(300,220,20,120);
  invb1=createSprite(100,675,480,5);
  start = createSprite(100,700,480,50);
  start.shapeColor="green"
  road1 = createSprite(360,585,50,280);
  road2 =createSprite(600,650,500,50);
  road3 = createSprite(280,470,200,50);
  road4 = createSprite(180,445,50,100);
  road5 = createSprite(115,370,180,50);
  road6 = createSprite(50,300,50,100);
  road7 = createSprite(875,675,50,100);
  road8 = createSprite(1100,730,500,50);
  road9 = createSprite(1370,600,50,320);
  road10 = createSprite(945,415,900,50);
  road11 = createSprite(480,315,50,250);
  road12 = createSprite(305,200,400,50);
  road13 = createSprite(80,150,50,150);
  road14 = createSprite(405,50,698,50);
  road15 = createSprite(200,150,50,100);
  road16 = createSprite(400,125,400,50);
  road17 = createSprite(600,200,50,200);
  road18 = createSprite(778,175,50,300);
  road19 = createSprite(905,300,300,50);
  road20 = createSprite(1050,175,50,300);
  road21 = createSprite(1180,50,220,50);
  road22 = createSprite(1300,175,50,300);
  road23 = createSprite(1250,150,100,50);
  road24 = createSprite(1220,200,50,150);
  road25 = createSprite(1370,350,190,50);
  road26 = createSprite(1440,200,50,300);
  road27 = createSprite(1550,75,200,50);
  road28 = createSprite(1550,150,200,50);
  road29 = createSprite(1625,370,50,400);
  road30 = createSprite(1600,400,200,50);
  road13 = createSprite(1520,550,50,350);
  road32 = createSprite(1600,700,210,50);
  road32.shapeColor="red";

  player = createSprite(50,700,20,20);
  player.shapeColor="orange";


  
}

function draw() {
  background(255,255,255);  
 

  player.collide(invb1);

  if(bulletGroup.isTouching(monsterGroup)){
    for(var i=0; i<monsterGroup.length;i++){
      if(monsterGroup[i].isTouching(bulletGroup)){
        monsterGroup[i].destroy();
      }
    }
  }
    
  
  
  if(keyIsDown(87)||keyIsDown(119) ){
    player.y -=5;
  }
  if (keyIsDown(83)||keyIsDown(115)){
    player.y +=5;
  }
  if(keyIsDown(65)||keyIsDown(97)){
    player.x-=5;
  }
  if(keyIsDown(68)||keyIsDown(100)){
    player.x +=5;
  }
  if(keyIsDown(32)){
    spawnBullet();
  }
  monster();
  drawSprites();
}

function monster(){
if(frameCount%50===0){
bluemonster = createSprite(player.x+100,player.y,20,20);
//bluemonster = createSprite(player.x-50,player.y,20,20);
bluemonster.shapeColor="blue"
bluemonster.velocityX=-2;
monsterGroup.add(bluemonster);

}
}

function spawnBullet(){
  bullet = createSprite(player.x,player.y,10,10);
  bullet.velocityX =2;
  bulletGroup.add(bullet);
}