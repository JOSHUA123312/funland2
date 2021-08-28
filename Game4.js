class Game4{
    constructor(){
        ground1 = createSprite(200,370,1200,600)
        ground1.addImage(background_game4)
        ground1.velocityX=-2

        ground2 = createSprite(840,370,1200,600)
        ground2.addImage(background_game4)
        ground2.velocityX=-2

        ground3 = createSprite(1480,370,1200,600)
        ground3.addImage(background_game4)
        ground3.velocityX=-2

        ground4 = createSprite(2120,370,1200,600)
        ground4.addImage(background_game4)
        ground4.velocityX=-2
        
        bow1 =createSprite(1300,200,20,20)
        
        
        score=0
        
        arrowGroup= new Group();
        rBallonGroup = new Group();
        bBallonGroup = new Group();
        gBallonGroup = new Group();
        yBallonGroup = new Group();
        
        
        
        //scale the ground 
        ground1.scale=2
        ground2.scale=2
        ground3.scale=2
        ground4.scale=2
        
        textSize(24)
        fill("yellow")
        textFont("arial")
    }
    play(){
        frontpg.hide()
        background("lightblue")




        //to reset the ground
        if (ground1.x<0) {
        ground1.x=ground1.width
        }
        if (ground2.x<0) {
        ground2.x=ground2.width
        }
        if (ground3.x<0) {
        ground3.x=ground3.width
        }
        if (ground4.x<0) {
        ground4.x=ground4.width
        }
        
        bow1.y=World.mouseY
        
        if (keyDown("space")) {
        createArrow()
        }
        
        
        
        
        select_ballon=Math.round(random(1,4))
        if (World.frameCount%80==0) {
          if (select_ballon===1) {
            redBallon()
          }else if (select_ballon==2) {
            blueBallon()
          }else if (select_ballon==3) {
            greenBallon()
          }else if (select_ballon==4) {  
            yellowBallon()
          }
        }
        
        if (arrowGroup.isTouching(rBallonGroup)) {
          rBallonGroup.destroyEach();
          arrowGroup.destroyEach();
          score=score+4
        }
        
        if (arrowGroup.isTouching(bBallonGroup)) {
          bBallonGroup.destroyEach();
          arrowGroup.destroyEach();
          score=score+5
        }
        
        if (arrowGroup.isTouching(gBallonGroup)) {
          gBallonGroup.destroyEach();
          arrowGroup.destroyEach();
          score=score+2
        }
        
        if (arrowGroup.isTouching(yBallonGroup)) {
          yBallonGroup.destroy()
         arrowGroup.destroyEach()
          score=score+4
        }

        
        
        drawSprites()
        text("Score:"+ score,270,30)
        if(score>49){
          textSize(50)
          text("YOU WON",600,400) 
          rBallonGroup.destroyEach()
          bBallonGroup.destroyEach()
          gBallonGroup.destroyEach()
          yBallonGroup.destroyEach()
          arrowGroup.destroyEach()
          ground1.velocityX=0
          ground2.velocityX=0
          ground3.velocityX=0
          ground4.velocityX=0
        }
        }
    }
        
        
        
        function createArrow(){
          arrow =createSprite(370,200,20,20)
          
          arrow.y=bow1.y 
          arrow.x=1300
          arrow.velocityX=-4
          arrow.lifetime=325
          arrowGroup.add(arrow)
        }
        
        function redBallon(){
          red=createSprite(0,random(20,670),10,10)
         
          red.velocityX=3
          red.lifetime=444
          rBallonGroup.add(red);
        }
        
        function blueBallon(){
          blue=createSprite(0,random(20,670),10,10)
         
          blue.velocityX=3
          blue.lifetime=444
          bBallonGroup.add(blue);
        }
        
        function greenBallon(){
          green=createSprite(0,random(20,670),10,10)
          
          green.velocityX=3
          green.lifetime=444
          gBallonGroup.add(green);
        }
        
        function yellowBallon(){
          yellow=createSprite(0,random(20,670),10,10)
          yellow.shapeColor="yellow"
          yellow.velocityX=3
          yellow.lifetime=444
          yBallonGroup.add(yellow);
          }
