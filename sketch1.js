var play,home,sound,nosound;
var bg1,bg2,bg3,bg4;
var enderman,endermanImage
var gameState="wait"
var disToBall
var ballx = 300;
var bally = 300;
var ballSize = 28;
var score = 0;

function preload() {
    myFont = loadFont('fonts/fontwrite.ttf')
    bg1=loadImage("b1.png")
    bg2=loadImage("images/s5.jpeg")
    bg3=loadImage("images/s6.jpeg")
    bg4=loadImage("images/s7.jpeg")
    bg5=loadImage("images/s4.jpeg")
    bg6=loadImage("images/s9.jpeg")
    bg7=loadImage("images/s8.jpeg")

    endermanImage = loadImage("images/Enderman_BE.png")

endImage = loadImage("images/end.png")
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
    sound = createButton('SOUND')
    sound.position(windowWidth / 2-200, windowHeight / 2)

    nosound = createButton('STOP SOUND     ')
    nosound.position(windowWidth / 2-200, windowHeight / 2+50)

    homebutton = createButton('HOME')
    homebutton.position(windowWidth / 2-200, windowHeight / 1.25+10)



}


function draw(){

    if(gameState==="wait"){
background(bg1)
about.show()
sound.show()
nosound.show()
play.show() 
enderman.visible=false
}


if(play.mousePressed(()=>{
    gameState="level 1"
    about.hide()
    sound.hide()
    nosound.hide()
    play.hide()   
}))

if(about.mousePressed(()=>{
gameState="about"}))

if(gameState==="about"){
    background(bg3)
    about.hide()
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




if(homebutton.mousePressed(()=>{
  gameState="wait"
}))

    drawSprites()
if(gameState==="about"){
    fill(0)
    textSize(100)
    text("About The Game",200,100)
}

if(gameState==="level 1" || gameState==="level 2" || gameState==="level 3" || gameState==="level 4" ||  gameState==="level 5"){
    fill("red")
    textSize(50)
    text(gameState,windowWidth-400, 50);
    text(("Score: "+ score),width/2,50);
}


if (gameState==="wait"){
    fill("red")
    stroke("black")
    textSize(150)
    text("EnderMan Chase Begins...",90, 150);
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
               gameState = "END"
           }
       }
   }

   function END(){
    background("orange");
    text("You Have Reached the End!!!",420, 100);
    endIm.visible = true
    endIm();
    fill("white")
    


}

