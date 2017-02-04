function Roll() {
  this.score = null
};

Roll.prototype.randomScore = function(min = 0, max = 10){
  this.score = Math.floor(Math.random()*(max-min+1)+min);
};
