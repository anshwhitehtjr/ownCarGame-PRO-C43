var canvas, backgroundImage;

var gameState = 0;
var playerCount,carsAtEnd;

var database;
var allPlayers;
var form, player, game;

var car1 ,car2 ,car3 ,car4 ,car1_img , car2_img , car3_img , car4_img;
var carsArray;

var ground_img ,track_img;

function preload(){
  car1_img = loadImage("car1.png");
  car2_img = loadImage("car2.png");
  car3_img = loadImage("car3.png");
  car4_img = loadImage("car4.png");

  ground_img = loadImage("ground.png");
  track_img = loadImage("track.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth-100,displayHeight-200);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4 && gameState === 0){
    game.update(1);

  }
  if (gameState === 1){
    clear();
    game.play();
    console.log("hi world");
  }
  if(gameState === 2) {
    game.end();
  }

  form.readChat();
}
