var level1background, level2background, level3background, level4background, level5background, endground, startScreen
var score, lives;
var npc;
var play, playimg, about, aboutimg, sound, soundimg, nosound, nosoundimg;
var gameState = "wait"
var gamesound

function preload() {
   /* startScreen = loadImage("images/startScreen.jpeg")
    level1background = loadImage("b1.png")
    level2background = loadImage("images/s2.jpeg")
    level3background = loadImage("images/s3.jpeg")
    level4background = loadImage("images/s4.jpeg")
    level5background = loadImage("images/end.png")
    endground = loadImage("images/end.png")*/

    //gamesound = loadSound("sounds/minecraft.mp3")

    //npcimg = loadImage("images/Enderman_BE.png")



}


function setup() {
    createCanvas(windowWidth, windowHeight)

    /*play=createSprite(windowWidth/2,windowHeight/2,100,20)
    
    about=createSprite(windowWidth/2,windowHeight/2.5,100,20)
    
    sound=createSprite(windowWidth/2,windowHeight/3,100,20)
    
    nosound=createSprite(windowWidth/2,windowHeight/3.5,100,20)*/

    play = createButton('     PLAY    ')
    play.position(windowWidth / 2, windowHeight / 3.5)


    about = createButton('     ABOUT    ')
    about.position(windowWidth / 2, windowHeight / 3)

    sound = createButton('       SOUND      ')
    sound.position(windowWidth / 2, windowHeight / 2.5)

    nosound = createButton('    STOP SOUND     ')
    nosound.position(windowWidth / 2, windowHeight / 2)

    homebutton = createButton('     HOME    ')
    homebutton.position(windowWidth / 2, windowHeight / 1.25)

    npc = createSprite(windowWidth / 2, windowHeight / 2)
    npc.addImage(npcimg)
    npc.visible = false
    npc.scale = 0.15


    gamesound.play()

}



function draw() {

    if (gameState === "wait") {
        background("pink")
        sound.show()
        nosound.show()
        homebutton.show()
        play.show()
        about.show()
        npc.visible = false


    }

    //adding functionality to the play button
    if( play.mousePressed(() => {
        gameState = "level1"
    }))

    if (gameState === "level1") {
        background("red")
        play.hide()
        sound.hide()
        nosound.hide()
        about.hide()
        npc.visible = true
    }

   if (about.mousePressed(() => {
        gameState = "aboutthegame"
    }))

    if (gameState === "aboutthegame") {
        background("orange")
        play.hide()
        sound.hide()
        nosound.hide()
        about.hide()
        textSize(25)
        fill(0)
        text("Write about the game here", windowWidth / 4, windowHeight / 4)

    }
   if (sound.mousePressed(() => {
     //   gamesound.play()
    }))


   if( nosound.mousePressed(() => {
       // gamesound.stop()
    })
)



  if ( homebutton.mousePressed(() => {
        gameState = "wait"
    }))

    drawSprites()
}

//arrow function where in we dont prefix word function and create the function like this:-
// ()=>{}