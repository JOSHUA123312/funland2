class Game1{
    constructor(){
  edges=createEdgeSprites()
  player=createSprite(35,30,20,20)
  player.shapeColor="red"
  player.addImage(player_img)
  player.scale=0.2 
  player.setCollider("circle",0,0,70)
  cardboardGroup=new Group()
  guards=new Group()
  cardboard1=createSprite(100,51,20,100)
  cardboard2=createSprite(50,180,100,20)
  cardboard3=createSprite(170,75,20,150)
  cardboard4=createSprite(255,50,150,20)
  cardboard5=createSprite(320,120,150,20)
  cardboard6=createSprite(405,140,20,280)
  cardboard7=createSprite(320,205,20,150)
  cardboard8=createSprite(260,200,100,20)
  cardboard9=createSprite(90,245,20,150)
  cardboard10=createSprite(52,380,100,20)
  cardboard11=createSprite(200,558,20,340)
  cardboard12=createSprite(50,490,20,100)
  cardboard13=createSprite(77,550,150,20)
  cardboard14=createSprite(135,650,150,20)
  cardboard15=createSprite(265,450,150,20)
  cardboard16=createSprite(350,500,20,320)
  cardboard17=createSprite(415,400,150,20)
  cardboard18=createSprite(550,175,20,350)
  cardboard19=createSprite(435,170,80,20)
  cardboard20=createSprite(155,310,150,20)
  cardboard21=createSprite(640,350,200,20)
  cardboard22=createSprite(740,285,20,150)
  cardboard23=createSprite(675,220,150,20)
  cardboard24=createSprite(740,155,20,150)
  cardboard25=createSprite(640,415,20,150)
  cardboard26=createSprite(575,480,150,20)
  cardboard27=createSprite(415,580,150,20)
  cardboard28=createSprite(575,650,20,170)
  cardboard29=createSprite(575,480,150,20)
  cardboard30=createSprite(640,575,150,20)
  cardboard31=createSprite(1270,400,150,20)
  cardboard32=createSprite(1200,75,20,150)
  cardboard33=createSprite(1305,140,80,20)
  cardboard34=createSprite(1100,300,150,20)
  cardboard35=createSprite(900,200,150,20)
  cardboard36=createSprite(825,200,20,398)
  cardboard37=createSprite(1270,600,150,20)
  cardboard38=createSprite(1270,500,20,200)
  cardboard39=createSprite(725,480,150,20)
  cardboard40=createSprite(900,389,150,20)
  cardboard41=createSprite(1100,215,20,150)
  cardboard42=createSprite(1120,80,150,20)
  cardboard43=createSprite(1180,350,29,120)
  cardboard44=createSprite(1000,75,20,150)
  cardboard45=createSprite(1000,600,150,20)
  cardboard46=createSprite(1000,666,20,150)
  cardboard47=createSprite(790,565,20,150)
  cardboard48=createSprite(965,445,20,100)
  
  cardboardGroup.add(cardboard1)
  cardboardGroup.add(cardboard2)
  cardboardGroup.add(cardboard3)
  cardboardGroup.add(cardboard4)
  cardboardGroup.add(cardboard5)
  cardboardGroup.add(cardboard6)
  cardboardGroup.add(cardboard7)
  cardboardGroup.add(cardboard8)
  cardboardGroup.add(cardboard9)
  cardboardGroup.add(cardboard10)
  cardboardGroup.add(cardboard11)
  cardboardGroup.add(cardboard12)
  cardboardGroup.add(cardboard13)
  cardboardGroup.add(cardboard14)
  cardboardGroup.add(cardboard15)
  cardboardGroup.add(cardboard16)
  cardboardGroup.add(cardboard17)
  cardboardGroup.add(cardboard18)
  cardboardGroup.add(cardboard19)
  cardboardGroup.add(cardboard20)
  cardboardGroup.add(cardboard21)
  cardboardGroup.add(cardboard22)
  cardboardGroup.add(cardboard23)
  cardboardGroup.add(cardboard24)
  cardboardGroup.add(cardboard25)
  cardboardGroup.add(cardboard26)
  cardboardGroup.add(cardboard27)
  cardboardGroup.add(cardboard28)
  cardboardGroup.add(cardboard29)
  cardboardGroup.add(cardboard30)
  cardboardGroup.add(cardboard31)
  cardboardGroup.add(cardboard32)
  cardboardGroup.add(cardboard33)
  cardboardGroup.add(cardboard34)
  cardboardGroup.add(cardboard35)
  cardboardGroup.add(cardboard36)
  cardboardGroup.add(cardboard37)
  cardboardGroup.add(cardboard38)
  cardboardGroup.add(cardboard39)
  cardboardGroup.add(cardboard40)
  cardboardGroup.add(cardboard41)
  cardboardGroup.add(cardboard42)
  cardboardGroup.add(cardboard43)
  cardboardGroup.add(cardboard44)
  cardboardGroup.add(cardboard45)
  cardboardGroup.add(cardboard46)
  cardboardGroup.add(cardboard47)
  cardboardGroup.add(cardboard48)

  cardboard1.shapeColor="white"
  cardboard2.shapeColor="white"
  cardboard3.shapeColor="white"
  cardboard4.shapeColor="white"
  cardboard5.shapeColor="white"
  cardboard6.shapeColor="white"
  cardboard7.shapeColor="white"
  cardboard8.shapeColor="white"
  cardboard9.shapeColor="white"
  cardboard10.shapeColor="white"
  cardboard11.shapeColor="white"
  cardboard12.shapeColor="white"
  cardboard13.shapeColor="white"
  cardboard14.shapeColor="white"
  cardboard15.shapeColor="white"
  cardboard16.shapeColor="white"
  cardboard17.shapeColor="white"
  cardboard18.shapeColor="white"
  cardboard19.shapeColor="white"
  cardboard20.shapeColor="white"
  cardboard21.shapeColor="white"
  cardboard22.shapeColor="white"
  cardboard23.shapeColor="white"
  cardboard24.shapeColor="white"
  cardboard25.shapeColor="white"
  cardboard26.shapeColor="white"
  cardboard27.shapeColor="white"
  cardboard28.shapeColor="white"
  cardboard29.shapeColor="white"
  cardboard30.shapeColor="white"
  cardboard31.shapeColor="white"
  cardboard32.shapeColor="white"
  cardboard33.shapeColor="white"
  cardboard34.shapeColor="white"
  cardboard35.shapeColor="white"
  cardboard36.shapeColor="white"
  cardboard37.shapeColor="white"
  cardboard38.shapeColor="white"
  cardboard39.shapeColor="white"
  cardboard40.shapeColor="white"
  cardboard41.shapeColor="white"
  cardboard42.shapeColor="white"
  cardboard43.shapeColor="white"
  cardboard44.shapeColor="white"
  cardboard45.shapeColor="white"
  cardboard46.shapeColor="white"
  cardboard47.shapeColor="white"
  cardboard48.shapeColor="white"
  
  
  star1=createSprite(100,700,20,20)
  star1.shapeColor="yellow"
  star2=createSprite(650,300,20,20)
  star2.shapeColor="yellow"
  star3=createSprite(1275,70,20,20)
  star3.shapeColor="yellow"
  superstar=createSprite(1270,665,40,40)
  superstar.shapeColor="yellow"

  guard1=createSprite(100,600,15,15)
  guard1.shapeColor="green"
  
  guard2=createSprite(780,300,15,15)
  guard2.shapeColor="green"
  
  guard3=createSprite(650,170,15,15)
  guard3.shapeColor="green"
  
  guard4=createSprite(1275,190,15,15)
  guard4.shapeColor="green"
  
  guard5=createSprite(1145,120,15,15)
  guard5.shapeColor="green"
  
  guard6=createSprite(990,250,15,15)
  guard6.shapeColor="green"
  
  guard7=createSprite(1050,400,15,15)
  guard7.shapeColor="green"
 
  guard8=createSprite(1130,400,15,15)
  guard8.shapeColor="green"
  
  guards.add(guard1)
  guards.add(guard2)
  guards.add(guard3)
  guards.add(guard4)
  guards.add(guard5)
  guards.add(guard6)
  guards.add(guard7)
  guards.add(guard8)

  

    }
    
    

 play(){
  frontpg.hide()
  background("darkblue")
       
  
  guard1.velocityX=-3
  guard2.velocityY=-3
  guard3.velocityX=-3
  guard4.velocityX=-3
  guard5.velocityX=-3
  guard6.velocityX=-3
  guard7.velocityY=-3
  guard8.velocityX=-3

  fill("cyan")
  text("START",20,20)
  fill("cyan")
  text("END",1260,700)

  player.velocityX=0
  player.velocityY=0
  

  if(keyDown(LEFT_ARROW)){
    player.velocityX=-5
   
  }
  if(keyDown(RIGHT_ARROW)){
    player.velocityX=5
    
  }
  if(keyDown(UP_ARROW)){
    player.velocityY=-5
  }
  if(keyDown(DOWN_ARROW)){
    player.velocityY=5
  }
  if(player.isTouching(star1)){
    star1.destroy()
  }
  if(player.isTouching(star2)){
    star2.destroy()
  }
  if(player.isTouching(star3)){
    star3.destroy()
  }
  
    
    
  
  if(guards.isTouching(player)){
      gameState=2
    }


  
    
  player.collide(edges)
  //player.collide(cardboardGroup)
  guards.bounceOff(edges)
    guards.bounceOff(cardboard18)
    guards.bounceOff(cardboard24)
     
  drawSprites()
  
}

 
  
  end(){
    background("white")
      guards.destroyEach()
      cardboardGroup.destroyEach()
      player.destroy()
      if(player.isTouching(star1)
      &&player.isTouching(star2)
      &&player.isTouching(star3)
      &&player.isTouching(superstar)){
        superstar.destroy()
      }
      star1.destroy()
      star2.destroy()
      star3.destroy()
      //superstar.destroy()
      textSize(50)
      fill("black")
      text("You Lost",600,400)
     }
}
