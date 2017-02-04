function Round() {
  this.rolls = []
};

Round.prototype.rollOne = function() {
  var roll = new Roll()
  roll.bowl()
  this.rolls.push(roll.score)
};

Round.prototype.rollOneScore = function() {
  var rollOneScoreCalc = this.rolls[0]
  var remainingPins = 10 - rollOneScoreCalc
  return "Roll 1 score = " + rollOneScoreCalc + "Remaining pins = " + remainingPins
};

Round.prototype.rollTwo = function() {
  var roll = new Roll()
  roll.bowl(0, remainingPins)
  this.rolls.push(roll.score)
};

Round.prototype.rollTwoScore = function() {
  var rollTwoScoreCalc = this.rolls[1
  return "Roll 2 score = " + rollTwoScoreCalc

};

Round.prototype.totalRoundScore = function() {
  var totalRoundScoreCalc = rollOneScoreCalc + rollTwoScoreCalc
  return "Total score for the round = " + totalRoundScoreCalc
}
