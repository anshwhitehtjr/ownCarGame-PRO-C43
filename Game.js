class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
    if(data.val() === 0 && gameState > data.val() ){
      window.location.reload();
    }
    gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1 = createSprite(0,0);
    car2 = createSprite(0,0);
    car3 = createSprite(0,0);
    car4 = createSprite(0,0);

    car1.addImage(car1_img);
    car2.addImage(car2_img);
    car3.addImage(car3_img);
    car4.addImage(car4_img);


    carsArray = [car1 ,car2 ,car3 ,car4];

  }

  play(){
    form.hide();
    Player.getPlayerInfo();
    Player.getCarsEnd();
    background(ground_img);
    image(track_img,0,-4 * displayHeight,displayWidth-100,displayHeight * 5);
    var x1,y1,number ;
    number = 0;
    x1 = 200;
    
    if(allPlayers !== undefined ){
      for(var plr in allPlayers){
        number++;
        x1 = x1+200;   
        carsArray[number-1].x = x1;  
        y1 = displayHeight-200-allPlayers[plr].distance;
        carsArray[number-1].y = y1;    

        stroke("white");
        fill("white")
        text(allPlayers[plr].name,x1-10 ,y1+80);

        
        if(plr === "player" + player.index){
          carsArray[number-1].shapeColor = "red";
          camera.y = y1;
          ellipseMode(CENTER);
          ellipse(x1,y1,70,70);
        }
      }
    }
    if(keyIsDown(UP_ARROW)&&player.index!== null){
      player.distance += 50;
      player.update();
    }

    if(player.distance>= 3500){
      gameState = 2;
      carsAtEnd += 1;
      player.updateCarsEnd(carsAtEnd);
      player.rank = carsAtEnd;
      player.update();

    }
    drawSprites();
  }

  end(){
    console.log("gameEnd");
  }
}
