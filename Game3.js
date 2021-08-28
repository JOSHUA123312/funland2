class Game3{
    constructor(){
        car=createSprite(683,600,30,30)
        car.addImage(car_img)
       
        carSupporter1=createSprite(658,600,3,90)
        carSupporter2=createSprite(712,600,3,90)
      
        sideRightSuporter=createSprite(1080,-displayHeight*1,100,displayHeight*6)
        sideLeftSuporter=createSprite(290,-displayHeight*1,100,displayHeight*6)
      
        Obstaclegroup=new Group()
        
      
        obstacle1=createSprite(420,10,60,40)
        //obstacle1.addImage(obstacle_img1)
        //obstacle1.scale=0.8
        obstacle2=createSprite(683,-600,60,40)
        obstacle2.addImage(obstacle_img2)
        obstacle2.scale=0.5
        obstacle3=createSprite(1000,10,60,40)
        obstacle3.addImage(obstacle_img2)
        obstacle3.scale=0.5
        obstacle4=createSprite(420,-1200,60,40)
        //obstacle4.addImage(obstacle_img1)
        obstacle4.scale=0.5
        obstacle5=createSprite(683,-1200,60,40)
        //obstacle5.addImage(obstacle_img1)
        //obstacle5.scale=0.8
        obstacle6=createSprite(1000,-1700,60,40)
        obstacle6.addImage(obstacle_img2)
        obstacle6.scale=0.5
        obstacle7=createSprite(420,-2200,60,40)
        //obstacle7.addImage(obstacle_img1)
        //obstacle7.scale=0.8
        obstacle8=createSprite(1000,-2200,60,40)
        obstacle8.addImage(obstacle_img2)
        obstacle8.scale=0.5
        obstacle9=createSprite(683,-2600,60,40)
        obstacle9.addImage(obstacle_img2)
        obstacle9.scale=0.5
        obstacle10=createSprite(1000,-2600,60,40)
        //obstacle10.addImage(obstacle_img1)
        //obstacle10.scale=0.8   
        
        Obstaclegroup.add(obstacle1)
        Obstaclegroup.add(obstacle2)
        Obstaclegroup.add(obstacle3)
        Obstaclegroup.add(obstacle4)
        Obstaclegroup.add(obstacle5)
        Obstaclegroup.add(obstacle6)
        Obstaclegroup.add(obstacle7)
        Obstaclegroup.add(obstacle8)
        Obstaclegroup.add(obstacle10)  
        
        obstacle1.setCollider("circle",0,0,-50)
        obstacle2.setCollider("circle",0,0,-50)
        obstacle3.setCollider("circle",0,0,-50)
        obstacle4.setCollider("circle",0,0,-50)
        obstacle5.setCollider("circle",0,0,-50)
        obstacle6.setCollider("circle",0,0,-50)
        obstacle7.setCollider("circle",0,0,-50)
        obstacle8.setCollider("circle",0,0,-50)
        obstacle9.setCollider("circle",0,0,-50)
        obstacle10.setCollider("circle",0,0,-50)
        
        endLine=createSprite(683,-2920,950,40)
    }
    
    
    play(){
        frontpg.hide()
        background(ground)
        image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
        car.velocityX=0
        

   if(keyDown("UP_ARROW")){
   car.velocityY=-10
   }
   
   if(keyDown("LEFT_ARROW")){
   car.velocityX=-10
   }

   if(keyDown("RIGHT_ARROW")){
   car.velocityX=10
   }

   camera.position.x = displayWidth/2;
   camera.position.y = car.y;

   car.collide(sideRightSuporter)
   car.collide(sideLeftSuporter)
   car.collide(carSupporter1)
   car.collide(carSupporter2)

   sideRightSuporter.visible=false
   sideLeftSuporter.visible=false  
   carSupporter1.visible=false
   carSupporter2.visible=false
   endLine.visible=false

   if(car.isTouching(endLine)){
     car.velocityY=0
     car.velocityX=0
     textSize(100)
     fill("white")
     text("You Won",483,-2950)
   }

   if(car.isTouching(Obstaclegroup)){
    gameState=6
    }

  
 
  drawSprites();

    }
    end(){
        background("white")
        car.velocityY=0
        car.velocityX=0
        textSize(100)
        fill("black")
        text("You Lose",483,car.y)
    }
}