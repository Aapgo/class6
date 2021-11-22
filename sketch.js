var ballx = 300;
var bally = 300;
var ballSize = 28;
var score = 0;
var gameState = "L1"
var endermanImage
var endermanSound
var endSound
var endImage
var endIm
function preload(){
//endermanSound = loadSound("sounds/enderman.mp3")
endermanImage = loadImage("images/Enderman_BE.png")
//endSound = loadSound("sounds/MinecraftEndPortalsounds.mp3")
endImage = loadImage("images/endOpened.png")
}

function setup(){
createCanvas(1000,600)
textAlign(CENTER);
textSize(20)
enderman = createSprite(300, 300, 50, 50)
endIm = createSprite(300,300, 100, 100);
endIm.addImage(endImage)
endIm.visible = false
enderman.addImage(endermanImage)
enderman.scale = .19;
}

function draw(){
    background("orange")



    if(gameState == "L1"){
        levelOne()
    }
    if(gameState == "L2"){
        levelTwo()
    }
    if(gameState == "L3"){
        levelThree()
    }
    if(gameState == "L4"){
        levelFour()
    }
    if(gameState == "L5"){
        levelFive()
    }
    if(gameState == "END"){
        END()
    }

drawSprites()
}//drawEND

function levelOne(){
    text("Level 1",950, 50);
    text(("Score: "+ score),width/2,50);
    var disToBall = dist(enderman.x, enderman.y, mouseX, mouseY);
    if(disToBall < ballSize/2){
        enderman.x = random(width);
        enderman.y = random(height);
        score = score+1
        
    }
    if(score>=5){
        gameState = "L2"
    }
    line(enderman.x, enderman.y,mouseX, mouseY);

}
function levelTwo(){
    text("Level 2",950, 50);
    text(("Score: "+ score),width/2,50);
    var disToBall = dist(enderman.x, enderman.y, mouseX, mouseY);
    if(disToBall < ballSize/2){
        enderman.x = random(width);
        enderman.y = random(height);
        score = score+1
    }
    if(score>=10){
        gameState = "L3"
    }


}
function levelThree(){
    background("purple")
    text("Level 3",950, 50);
    text(("Score: "+ score),width/2,50);
    var disToBall = dist(enderman.x, enderman.y, mouseX, mouseY);
    if(disToBall < ballSize/2){
        enderman.x = random(width);
        enderman.y = random(height);
        score = score+1
    }
    if(score>=15){
        gameState = "L4"

    }


}
function levelFour(){
 background("black");
    fill("white")
    text(("Score: "+ score),width/2,50);
    text("Level 4",950, 50);
    var disToBall = dist(enderman.x, enderman.y, mouseX, mouseY);
    if(disToBall < ballSize/2){
        enderman.x = random(width);
        enderman.y = random(height);
        score = score+1
      
    }
    if(score>=20){
        gameState = "L5"
    }


}
function levelFive(){
    background("black");
    fill("white")
    text("Level 5",950, 50);
    text(("Score: "+ score),width/2,50);
    var disToBall = dist(enderman.x, enderman.y, mouseX, mouseY);
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