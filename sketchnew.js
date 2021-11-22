var play,home,sound,nosound;
var bg1,bg2,bg3,bg4;
var enderman,endermanImage
var gameState="wait"
var disToBall
var ballx = 300;
var bally = 300;
var ballSize = 28;
var score = 0;
var time=50;

function preload() {
    myFont = loadFont('fonts/fontwrite.ttf')
    bg1=loadImage("b1.png")
    bg2=loadImage("images/s5.jpeg")
    bg3=loadImage("images/s6.jpeg")
    bg4=loadImage("images/s7.jpeg")
    bg5=loadImage("images/s4.jpeg")
    bg6=loadImage("images/s9.jpeg")
    bg7=loadImage("images/s8.jpeg")
    bgEND=loadImage("images/download-removebg-preview.png")

    endermanImage = loadImage("images/Enderman_BE.png")
    lostimg=loadImage("end.jpg")

endImage = loadImage("images/end.png")
sound = loadSound("sounds/MINECRAFT.mp3")
}

function setup(){
    textFont(myFont);

    createCanvas(windowWidth,windowHeight)

    enderman = createSprite(300, 300, 50, 50)
endIm = createSprite(300,300, 100, 100);
endIm.addImage(endImage)
endIm.visible = false
enderman.addImage(endermanImage)
enderman.scale = .19;
enderman.visible=false

    play = createButton('PLAY')
    play.position(windowWidth / 2-200, windowHeight / 2-100)
   

    about = createButton('ABOUT')
    about.position(windowWidth / 2-200, windowHeight / 2-50)
    
    settings = createButton('Settings')
    settings.position(windowWidth / 2-200, windowHeight / 2)
    
    sound = createButton('SOUND')
    sound.position(windowWidth / 2-200, windowHeight / 2)
    
    nosound = createButton('STOP SOUND')
    nosound.position(windowWidth / 2-200, windowHeight / 2+50)

    sound.hide()
    nosound.hide()

    homebutton = createButton('HOME')
    homebutton.position(windowWidth / 2-200, windowHeight / 1.25+80)


}


function draw(){

    if(gameState==="wait"){
background(bg1)
about.show()
sound.show()
nosound.show()
play.show() 
settings.show()
enderman.visible=false
}

if(settings.mousePressed(()=>{
    gameState="level 1"
    about.hide()
    settings.hide()
    play.hide()   
}))


if(play.mousePressed(()=>{
    gameState="level 1"
    about.hide()
    settings.hide()
    sound.hide()
    nosound.hide()
    play.hide()   
}))

if(about.mousePressed(()=>{
gameState="about"}))

if(gameState==="about"){
    background(bg3)
    about.hide()
    settings.hide()
    sound.hide()
    nosound.hide()
    play.hide() 
}

if(gameState==="level 1"){
    background(bg2)
  levelOne()
    enderman.visible=true
}

if(gameState==="level 2"){
    background(bg4)
    levelTwo()
    enderman.visible=true
}

if(gameState==="level 3"){
    background(bg5)
levelThree()
    enderman.visible=true
}

if(gameState==="level 4"){
    background(bg6)
levelFour()
    enderman.visible=true
}

if(gameState==="level 5"){
    background(bg7)
levelFive()
    enderman.visible=true
}

if(gameState==="WIN"){
    background(bgEND)
    enderman.visible=false

}


if(homebutton.mousePressed(()=>{
  gameState="wait"
}))


if(time<=0 && gameState!== "level 5"){
    gameState="lost"
}

    drawSprites()
if(gameState==="about"){
    strokeWeight(4)
    stroke("black")
    fill("red")
    textSize(50)
    text("This Game is about catching the loose Enderman... ",10,150)
    text("The Enderman has  escaped the end dimension..",10,250)
    text("It has made  it to earth where you live.",10,350)
   text( "Your goal is to  catch it and bring it back... ",10,450)
   text("Do it before your time on earth runs out.",10,550)
   text("SO WHAT ARE YOU WAITING FOR ?????",windowWidth/2-200,650)
   text("GO GET HIM !!!!",windowWidth/2-100,750)
}

if(gameState==="level 1" || gameState==="level 2" || gameState==="level 3" || gameState==="level 4" ||  gameState==="level 5"){
    timer()
    strokeWeight(4)
    fill("red")
    textSize(50)
    text(gameState,windowWidth-400, 50);
    text("Score: "+ score,width/2,50);
    text("Time Left : "+time,350,50)
}


if (gameState==="wait"){
    strokeWeight(4)
    stroke(0)
    fill("red")
    stroke("black")
    textSize(150)
    text("EnderMan Chase Begins...",90, 150);
}

if(gameState==="WIN"){
    strokeWeight(4)
    stroke(0)
    fill("red")
    textSize(80)
    text("Congratulations!!! You Have Reached the End!!!",50, windowHeight/2);
    score=0
    time=50
}

if(gameState==="lost"){
    background(lostimg)
    stroke(0)
    strokeWeight(4)
    fill("red")
    textSize(100)
    text("You Have LOST the Game !!!",windowWidth/4, windowHeight/2);
    
    score=0
    time=50
    homebutton.hide()
     
}


}


function levelOne(){
    var disToBall = dist(enderman.x, enderman.y, mouseX, mouseY);
    if(disToBall < ballSize/2){
        enderman.x = random(width);
        enderman.y = random(height);
        score = score+1
        
    }
    if(score>=5){
        gameState = "level 2"
    }
    line(enderman.x, enderman.y,mouseX, mouseY);

}

function levelTwo(){
   
 disToBall = dist(enderman.x, enderman.y, mouseX, mouseY);
    if(disToBall < ballSize/2){
        enderman.x = random(width);
        enderman.y = random(height);
        score = score+1
    }
    if(score>=10){
        gameState = "level 3"
    }


}

function levelThree(){
    
     disToBall = dist(enderman.x, enderman.y, mouseX, mouseY);
    if(disToBall < ballSize/2){
        enderman.x = random(width);
        enderman.y = random(height);
        score = score+1
    }
    if(score>=15){
        gameState = "level 4"

    }


}

function levelFour(){
    disToBall = dist(enderman.x, enderman.y, mouseX, mouseY);
       if(disToBall < ballSize/2){
           enderman.x = random(width);
           enderman.y = random(height);
           score = score+1
         
       }
       if(score>=20){
           gameState = "level 5"
       }
   
   
   }
   function levelFive(){
       disToBall = dist(enderman.x, enderman.y, mouseX, mouseY);
       if(disToBall < ballSize/2){
           enderman.x = random(width);
           enderman.y = random(height);
           score = score+1
           if(score>=28){
               gameState = "WIN"
           }
       }
   }


function timer(){
    if(frameCount%60===0){
        time=time-1
    }

}