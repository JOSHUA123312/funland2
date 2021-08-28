class Front{
    constructor() {
     this.playButton=createButton('Play')
     this.storyButton=createButton('Story')
     this.title=createElement('h2')
     this.greeting=createElement('h2')
     this.first=createButton('1')
     this.second=createButton('2')
     this.third=createButton('3')
     this.fourth=createButton('4')
     this.fifth=createButton('5')
     this.story=createElement('h2')
     this.homepg=createButton('Back')
    }
    hide(){
      this.playButton.hide()
      this.title.hide()
      this.storyButton.hide()
      this.greeting.hide()
      this.story.hide()
      this.first.hide()
      this.second.hide()
      this.third.hide()
      this.fourth.hide()
      this.fifth.hide()
      this.fifth.hide()
      this.homepg.hide()
    }
    display(){
      this.title.html("FUNLAND FAIR")
      this.title.position(displayWidth/2 - 50, 0);
      this.playButton.position(displayWidth/2 -30, displayHeight/2-20);
      this.playButton.style('background','lightgrey')
      this.playButton.style('width','150px')
      this.playButton.style('height','30px')
      this.storyButton.position(displayWidth/2 -30, displayHeight/2+40);
      this.storyButton.style('background','lightgrey')
      this.storyButton.style('width','150px')
      this.storyButton.style('height','30px')
     
        this.playButton.mousePressed(()=>{
        this.playButton.hide()
        this.title.hide()
        this.storyButton.hide()
        this.greeting.show()
        this.first.show()
        this.second.show()
        this.third.show()
        this.fourth.show()
        this.fifth.show()
        this.fifth.show()
        this.homepg.show()
        this.homepg.position(displayWidth/2 - 665, displayHeight/4+200);
        this.greeting.html("Hello Player , there are 5 games.Your aim is to play and win all the games")
        this.greeting.position(displayWidth/2 - 330, displayHeight/4);
        this.first.position(displayWidth/2 -200, displayHeight/2-20);
        this.second.position(displayWidth/2 -100, displayHeight/2-20);
        this.third.position(displayWidth/2 , displayHeight/2-20);     
        this.fourth.position(displayWidth/2+100, displayHeight/2-20);
        this.fifth.position(displayWidth/2 +200, displayHeight/2-20);     
        this.first.style('background','orange')
        this.second.style('background','orange')
        this.third.style('background','orange')
        this.fourth.style('background','orange')
        this.fifth.style('background','orange')
        this.fifth.style('background','orange')
        this.homepg.mousePressed(()=>{
        this.playButton.show()
        this.storyButton.show()
        this.title.show()
        this.first.hide()
        this.second.hide()
        this.third.hide()
        this.fourth.hide()
        this.fifth.hide()
        this.fifth.hide()
        this.homepg.hide()
        this.greeting.hide()
        })
      })
        
        this.storyButton.mousePressed(()=>{
        this.playButton.hide()
        this.title.hide()
        this.storyButton.hide()
        this.story.show()
        this.homepg.show()
        this.story.html("There was a boy who was getting bore at home so he decided to go to the fair near his house . The fair name is Funland . He played there 7 games . Help him to win the games and prizes ")
        this.story.position(displayWidth/2 - 665, displayHeight/4);
        this.homepg.position(displayWidth/2 - 665, displayHeight/4+200);
        this.homepg.mousePressed(()=>{
        this.playButton.show()
        this.storyButton.show()
        this.title.show()
        this.story.hide()
        this.homepg.hide()
      })
      })
      this.first.mousePressed(()=>{
        gameState=1
      })
      this.second.mousePressed(()=>{
        gameState=3
      })
      this.third.mousePressed(()=>{
        gameState=5
      })      
      this.fourth.mousePressed(()=>{
        gameState=7
      })
      this.fifth.mousePressed(()=>{
        gameState=9
      })
    }
  }
  