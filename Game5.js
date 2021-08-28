class Game5{
    constructor(){
    edges=createEdgeSprites()
    basket=createSprite(750,710,150,50)
    basket.addImage(basket_img)
    fruitGroup=new Group()
    score=0
    textSize(40)
    fill("white")

    }
    play(){
        frontpg.hide()
        background(background_img)
        basket.velocityX=0
        basket.velocityY=0

        text("Score:"+score,100,100)

        if(keyDown(LEFT_ARROW)){
            basket.velocityX=-5
           
          }
          if(keyDown(RIGHT_ARROW)){
            basket.velocityX=5
            
          }

          if (frameCount % 20 === 0) {
            fruits = createSprite(random(100, 1000), 0, 100, 100);
            fruits.velocityY = 6;
            var rand = Math.round(random(1,5));
            switch(rand){
                case 1: fruits.addImage("fruit1",fruit1_img);
                break;
                case 2: fruits.addImage("fruit1", fruit2_img);
                break;
                case 3: fruits.addImage("fruit1", fruit3_img);
                break;
                case 4: fruits.addImage("fruit1", fruit4_img);
                break;
                case 5: fruits.addImage("fruit1", fruit5_img);
                break;
            }
            fruitGroup.add(fruits);
            
        }
        for(var i=0;i<fruitGroup.length;i++)
        if(fruitGroup.get(i).isTouching(basket)){
            fruitGroup.get(i).destroy()
            score=score+1
        }
        if(score>49){
            textSize(50)
            text("YOU WON",600,400) 
            fruitGroup.destroyEach()
            basket.destroy()
        }


          basket.collide(edges)
          
        drawSprites()
    }
}