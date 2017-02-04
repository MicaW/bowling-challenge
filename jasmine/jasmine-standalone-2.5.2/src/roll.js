function Roll() {
  this.score = randomScore()
};

Roll.prototype.bowl = function(){
  roll = new Roll
  roll.randomScore()
};

Roll.prototype.randomScore = function(){
  Math.floor((Math.random() * 10) + 0);
};
