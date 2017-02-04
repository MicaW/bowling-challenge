function Roll() {
  this.score = null
};

Roll.prototype.bowl = function(){
  this.randomScore()
};

Roll.prototype.randomScore = function(min,max){
  var min = 0
  var max = 10
  this.score = Math.floor(Math.random()*(max-min+1)+min);
};
