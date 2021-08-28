var frontpg,game1,game2,game3
var gameState=0

var player
var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,
cardboard7,cardboard8,cardboard9,cardboard10,cardboard11,cardboard12,
cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,
cardboard19,cardboard20,cardboard21,cardboard22,cardboard23,cardboard24,
cardboard25,cardboard26,cardboard27,cardboard28,cardboard29,cardboard30,
cardboard31,cardboard32,cardboard33,cardboard34,cardboard35,cardboard36,
cardboard37,cardboard38,cardboard39,cardboard40,cardboard41,cardboard41,
cardboard41,cardboard42,cardboard43,cardboard44,cardboard45,cardboard46,
cardboard46,cardboard47,cardboard48
var cardboardGroup
var edges
var star1,star2,star3,superstar
var guard1,guard2,guard3,guard4,guard5,guard6,guard7,guard8
var guards
var stars

var car
var car_img,track,ground
var Obstaclegroup
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,obstacle8,
obstacle9,obstacle10
var carSupporter1,carSupporter2
var sideLeftSuporter,sideRightSuporter
var obstacle_img2
var endLine

var striker
var computerMallet,playerMallet
var goal1,goal2
var Boundary1,Boundary2,Boundary3,Boundary4,Boundary5,Boundary6
var computerscore,playerscore

var ground1,ground2,ground3,ground4
var bow1
var arrowGroup
var rBallonGroup,bBallonGroup,gBallonGroup,yBallonGroup
var select_ballon
var arrow
var red,green,yellow,blue

var basket
var fruitGroup
var fruits
var score 

function preload(){
player_img=loadImage("running_boy_image-removebg-preview.png")
car_img=loadImage("car3.png")
track=loadImage("track.jpg")
ground=loadImage("ground.png")
//obstacle_img1=loadImage("images.jpg")
obstacle_img2=loadImage("stone.png")
fruit1_img = loadImage("apple2.png");
  fruit2_img = loadImage("banana2.png");
  fruit3_img = loadImage("melon2.png");
  fruit4_img = loadImage("orange2.png");
  fruit5_img = loadImage("pineapple2.png");
  basket_img=loadImage("basket2.png")
  background_img=loadImage("jungle.jpg")
  background_game4=loadImage("background(FUNLAND).jpg")
}

function setup() {
  createCanvas(displayWidth-20, displayHeight-30);
frontpg=new Front()
game1=new Game1()
//game2=new Game2()
//game3=new Game3()
//game4=new Game4()
//game5=new Game5()

}

function draw() {
  background("yellow"); 

  frontpg.display()
  
 if(gameState===1){
  game1.play()
 }
 if(gameState===2){
  game1.end()
 }
  if(gameState===3){
    game2.play()
  }
  if(gameState===4){
    game2.end()
  }
  if(gameState===5){   
   game3.play() 
  }
  if(gameState===6){
   game3.end()
 }  
  if(gameState===7){
  game4.play()
  } 
 if(gameState===9){
   game5.play()
 }
  
  
}

