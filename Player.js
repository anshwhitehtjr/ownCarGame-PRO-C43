class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      rank:this.rank 
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value",(data) => {
      allPlayers = data.val();
    })
  }

  static getCarsEnd(){
    var Ref = database.ref('carsAtEnd');
    Ref.on("value",function(data){
      carsAtEnd = data.val();
    })
  }

  updateCarsEnd(count){
    database.ref('/').update({
      carsAtEnd: count 
    });
  }

}
