var aeroplane,cartoon,car,edges,leftEdge,gravity,restriction,rock
var aeroplaneImg,cartoonImg,backgroundImg,carImg,aeroplane2Img,car2Img,rockImg,lcarImg,lcar2img
var gameOver,reset
var gameOverImg, resetImg
function preload() {
 aeroplaneImg = loadImage("assets/aeroplane2.png")
 cartoonImg = loadAnimation("assets/cartoon1.png","assets/cartoon2.png")
 backgroundImg = loadImage("assets/bg.png")
 gameOverImg = loadImage("assets/gameOver.png")
 resetImg = loadImage("assets/restart.png")
 aeroplane2Img = loadImage("assets/aeroplane.png")
 car2Img = loadAnimation("assets/car1.png","assets/car2.png","assets/car3.png")
 carImg = loadImage("assets/car1.png")
 lcarImg = loadImage("assets/lcar1.png")
 lcar2img = loadAnimation("assets/lcar1.png","assets/lcar2.png","assets/lcar3.png")
 rockImg = loadImage("assets/rock.png")
}


function setup() {
createCanvas(windowWidth,windowHeight)

aeroplane = createSprite(100,80)
aeroplane.addImage("right",aeroplaneImg)
aeroplane.addImage("left",aeroplane2Img)

cartoon = createSprite(random(0,windowWidth),aeroplane.y,50,50)
cartoon.addAnimation("cartoon",cartoonImg)
cartoon.scale = 0.4

car = createSprite(150,579.1,50,50)
car.addImage("car",carImg)
car.addAnimation("car2",car2Img)
car.addAnimation("lcar2",lcar2img)
car.addImage("lcar",lcarImg)
car.scale = 0.6

restriction = createSprite(windowWidth/2,470,windowWidth,10)
restriction.visible = false

rock = createSprite(Math.round(random(windowWidth-windowWidth/2)),590,100,50)
rock.addImage(rockImg)
rock.scale = 0.35
}


function draw() {
  background(backgroundImg);
  edges = createEdgeSprites();
  leftEdge = createSprite(windowWidth/400,windowHeight/2,10,windowHeight)
  leftEdge.visible = false

  if(aeroplane.collide(leftEdge)){
    aeroplane.changeImage("right",aeroplaneImg)
    aeroplane.velocityX = 20
  }
  if(aeroplane.collide(edges[1])){
    aeroplane.changeImage("left",aeroplane2Img)
    aeroplane.velocityX = -20
  }
 
  if(keyDown("space")){
    aeroplane.velocityX = 20
  }

  if(keyDown(RIGHT_ARROW)){
    car.x += 15
    car.changeImage("car",carImg)
  }

  if(keyDown(LEFT_ARROW)){
    car.x -= 15
    car.changeImage("lcar",lcarImg)
  }

  if(keyDown(UP_ARROW)){
    car.y -= 15
   
  }
  car.velocityY = car.velocityY + 0.8

  if(car.y<579.1){
    car.velocityY = 10
  }
  car.collide(edges)

  cartoon.velocityY = Math.round(random(1,2))
  cartoon.velocityX = Math.round(random(1,2))
  cartoon.collide(edges)
 // console.log(cartoon.velocityY)
  console.log(car.y)
  if(car.collide(restriction)){
    car.bounceOff(restriction)
  }

  drawSprites()
  }

