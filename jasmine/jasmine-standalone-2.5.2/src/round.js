function Round(roll = new Roll()) {
  this.rolls = []
  this.roll = roll
};

Round.prototype.rollOne = function() {
  this.roll.randomScore()
  this.rolls.push(this.roll.score)
};

Round.prototype.rollOneScore = function() {
  var rollOneScoreCalc = this.rolls[0]
  var remainingPins = 10 - rollOneScoreCalc
  return "Roll 1 score = " + rollOneScoreCalc + "Remaining pins = " + remainingPins
};

Round.prototype.rollTwo = function() {
  var rollOneScoreCalc = this.rolls[0]
  var remainingPins = 10 - rollOneScoreCalc
  this.roll.randomScore(0, remainingPins)
  this.rolls.push(this.roll.score)
};

Round.prototype.rollTwoScore = function() {
  var rollTwoScoreCalc = this.rolls[1]
  return "Roll 2 score = " + rollTwoScoreCalc
};

Round.prototype.totalRoundScore = function() {
  var rollOneScoreCalc = this.rolls[0]
  var rollTwoScoreCalc = this.rolls[1]
  var totalRoundScoreCalc = rollOneScoreCalc + rollTwoScoreCalc
  return "Total score for the round = " + totalRoundScoreCalc
};
