class Game2{
    constructor(){
        striker=createSprite(700,350,20,20)
        computerMallet=createSprite(200,48,60,15)
        playerMallet=createSprite(700,680,60,15)
        goal1=createSprite(670,28,1300,20)
        goal2=createSprite(670,700,1300,20)
        Boundary1=createSprite(600,14,1500,5)
        Boundary2=createSprite(600,500,1500,5)
        Boundary3=createSprite(600,710,1500,5)
        Boundary4=createSprite(600,200,1500,5)
        Boundary5=createSprite(14,200,5,1070)
        Boundary6=createSprite(1326,200,5,1070)
        goal1.shapeColor="yellow"
        goal2.shapeColor="yellow"
        Boundary1.shapeColor="white"
        Boundary2.shapeColor="white"
        Boundary3.shapeColor="white"
        Boundary4.shapeColor="white"
        Boundary5.shapeColor="white"
        Boundary6.shapeColor="white"
        computerMallet.shapeColor="black"
        playerMallet.shapeColor="black"
        striker.shapeColor="white"
        computerscore=0
        playerscore=0
        gameState="serve"
    }
    play(){
    frontpg.hide()
    background("limegreen")
      textSize(40)
      text(computerscore,40,330);
      text (playerscore , 40,390);
      
      if(striker>400||striker<0){
        if(striker>400){
          playerMallet.x=200;
          playermallet.y;
        }
      }
    
      
      
    
    if(keyDown("left")){
      playerMallet.x=playerMallet.x-10
    }
    if (keyDown("right")){
      playerMallet.x=playerMallet.x+10
    }
      if(keyDown("up")){
        playerMallet.y=playerMallet.y-10
      }
     if (keyDown("down")){
       playerMallet.y=playerMallet.y+10
     }
      //to make the computer mallet move with the ball's x axis
      computerMallet.x = striker.x;
      
      //to draw horizontal line at the centre
      for (var i = 0; i < 1500; i=i+20) {
        line(i,350,i+10,350);
      }
      
      
      
      //to let the striker bounceoff from the left and the right edges
      striker.bounceOff(Boundary5);
      striker.bounceOff(Boundary6);
       //to let the striker bounceoff from the playermallet and the computer mallet
      striker.bounceOff(playerMallet);
      striker.bounceOff(computerMallet);
      playerMallet.bounceOff(Boundary5);
      playerMallet.bounceOff(Boundary6);
      computerMallet.bounceOff(Boundary5);
      computerMallet.bounceOff(Boundary6);
      playerMallet.bounceOff(Boundary1);
      playerMallet.bounceOff(Boundary3);
       computerMallet.bounceOff(Boundary1);
      computerMallet.bounceOff(Boundary3);
      //to serve the ball when space is pressed
      if (keyDown("space")) {
        striker.velocityX=-5
        striker.velocityY=5
        
      }
      
     
      //inorder to bring the ball back to centre 
      if(striker.y>700 || striker.y <0) {
        if (striker.y > 700){
        computerscore=computerscore+1;
        
        }
    
         if(striker.y < 0){
           playerscore=playerscore+1;
         }
         striker.x=700
         striker.y=350
         striker.velocityX=0
         striker.velocityY=0
         if (keyDown("space")) {
            striker.velocityX=-5
            striker.velocityY=5
            
          }
        }
        
     
      //information to display when 5 points are earned
      if(playerscore===5||computerscore===5){
      gameState=4
        
      }
    
    
    
     
    drawSprites()
    }
    end(){
        textSize(30)
        fill("cyan")
        text("Game over",700,400);
    }
}