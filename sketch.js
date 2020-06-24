let scenarioImage;
let character;
let scenario;
let gameSound;
let witch;

//Uplod the files berofe the game load
function preload() {
  scenarioImage = loadImage("imagens/cenario/floresta.png");
  character = loadImage("imagens/personagem/correndo.png");
  gameSound = loadSound("sons/trilha_jogo.mp3");
}

//It's called before the game start
function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario (scenarioImage,4); //using the constructor to instance a scenario with speed=4
  witch = new Character (character);
  frameRate(40);
  gameSound.loop();
 
}

//Similar to the loop
function draw() {
  scenario.show(); //Show the object scenario on the screen
  scenario.move(); //Move the both scenarios acoording the set speed
  witch.show ();
}
