
var monkey , monkey_running
var ground , groundImage;
var banana ,bananaImage,bananaGroup, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0 ;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaclesImage = loadImage("obstacle.png");
 
}



function setup() {
  background(50);
  

  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
  //ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  console.log(ground.x);
  
  bananaGroup = new Group ();
  obstaclesGroup = new Group();
}


function draw() {
  
  background (225);

  if (ground.x<0){
      ground.x = ground.width/2;
  }
  
  
  if(keyDown("space")){
    monkey.velocityY = -12 ; 
     
     }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  
  stroke("white")
  textSize(20);
  fill("white");
  text("Score: " + score , 500,50);
  
  stroke("black");
  textSize("20")
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time : " + survivalTime , 100,50);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
  
  
}

function food(){
  
   if(frameCount % 80 === 0) {
      var banana = createSprite( 600,120,40,20)
      banana.y = Math.round(random(120,200))
      banana.addImage(bananaImage);
      banana.scale = 0.5;
      banana.velocity.Y = -3;
      banana.lifetime = 200;
  
      bananaGroup.add(banana);
  
      }
  

}


function spawnobstacles (){
  
  if(frameCount % 300 === 0){
     var obstacle = createSprite(600,165,10,40);
     obstacle.velocityX = -(6+3*score/100);
     
      obstacle.x = Math.round(random(1,6));
      obstacle.addImage(obstaclesImage);
      obstacle.scale = 0.8;
      obstacle.velocity.X = -3;
      obstacle.lifetime = 300;
      obstacleGroup.add(obstacle);
      
  }
  
}




