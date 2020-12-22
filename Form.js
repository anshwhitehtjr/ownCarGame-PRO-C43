class Form {
  constructor() {

    this.input = createInput("Name");
    this.button = createButton("Play");
    this.greeting = createElement('h2');
    this.reset = createButton('Restart');
    this.chatBox = createInput();
    this.send = createButton('send');
    this.chatText = createElement('h5');
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth*2/5,50);
    
    this.input.position(displayWidth*2/5,displayHeight*1.5/5);
    this.button.position(displayWidth*2/5, displayHeight*2/5);
    
    this.reset.position(displayWidth-200, displayHeight/10 );

    this.chatBox.position(displayWidth-400, displayHeight -300);
    this.send.position(displayWidth-100, displayHeight -300);
    this.chatText.position(displayWidth -400, displayHeight -200);
    this.send.mousePressed(() => {
      database.ref("/").update({
        chat : this.chatBox.value()
      });
    })

    this.chatText.hide();
    this.chatBox.hide();
    this.send.hide();    

    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();

      this.chatText.show();
      this.chatBox.show();
      this.send.show(); 

      this.chatText.html("abc");

      player.name = this.input.value();
          
      playerCount+=1;
      player.index = playerCount;
      player.updateCount(playerCount);
      player.update();
      
     
      this.greeting.html("waiting for players " + player.name );
      this.greeting.position(130, 160);
    });

      this.reset.mousePressed(() => {
        player.updateCount(0);
        game.update(0);
        w
      });

  }

   readChat(){
    database.ref("chat").on("value",(data) => {
      //this.chatText.html(data.val());
      var v = data.val();
      console.log(this.chatText);
      this.chatText.html(v);
      
    });
  }
}
