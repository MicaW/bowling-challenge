function Game(round = new Round) {
  this.rounds = []
  this.round = round
};

Game.prototype.startGame = function(){
  game = new Game
};

Game.prototype.addRoundScore = function(){
  this.rounds.push(this.round.totalRoundScore())
};

Game.prototype.gameScore = function(){
  for (
    var
      index = 0,
      length = this.rounds.length,
      sum = 0;
      index < length;
      sum += this.rounds[index++]
  );
  return sum
};
