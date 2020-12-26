var sword,swordImg,  
fruit,fruit1,fruit2,fruit3,fruit4, gameOverImg,enemy,enemyImg
score = 0,gameState = "play"
function preload(){
 swordImg = loadImage ("sword.png") 
 fruit1 = loadImage ("fruit1.png")
   fruit2= loadImage ("fruit2.png")
  fruit3 = loadImage ("fruit3.png")
  fruit4 = loadImage ("fruit4.png")
  enemyImg = loadAnimation ("alien1.png")//"alien2.png")
  gameOverImg = loadImage ("gameover.png")
 
}

function setup(){
  createCanvas  (600,600)
  sword = createSprite (100,100,20,20)
  sword.addImage (swordImg)
  sword.scale = 0.7
  fruitGroup = new Group ();
   enemyGroup = new Group ();
}

function draw(){
background ("lightblue")
  text("score = "+score,500,50)
  if(gameState === "play"){
  sword.y = mouseY
  sword.x = mouseX
  
  fruits();
  enemys();
  if(sword.isTouching(fruitGroup)){
    fruitGroup.destroyEach();
   score= score+4 
 }
   if(sword.isTouching(enemyGroup)){
    fruitGroup.destroyEach();
     enemyGroup.destroyEach();
  gameState = "end"
     sword.addImage (gameOverImg)
     sword.x = 300
     sword.y = 300
 }
  }
  drawSprites()
}
function fruits (){
  if (frameCount% 80 ===0){
       fruit = createSprite (0,0,20,20)
    var rand = Math.round(random(1,2))
    if(rand === 1){
      fruit .x = 0
       fruit.velocityX = 3 + score/4
       }
      if(rand ===2){
        fruit .x = 600
         fruit.velocityX = -(3 + score / 4)
      }
   
    fruit.scale = 0.2
   
   fruitGroup.add(fruit)
    fruit.y = Math.round(random(50,500))
  var r = Math.round (random(1,4))
  if(r===1){
    fruit.addImage (fruit1)
  }
   if(r===2){
    fruit.addImage (fruit2)
   }
   if(r===3){
    fruit.addImage (fruit3)
   }
   if(r===4){
    fruit.addImage (fruit4)
   }
}
}
function enemys (){
 if (frameCount% 200 ===0){
    enemy = createSprite (0,0,20,20)
    enemy.scale = 1
    enemy.velocityX = 3 + score / 10
    enemy.y = Math.round(random(50,500))
  var r = Math.round (random(1,4)) 
  enemy.addAnimation ("enemy",enemyImg)
   enemyGroup.add(enemy)
}
}