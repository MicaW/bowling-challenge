describe('Round', function(){

  var round;

  beforeEach(function() {
    round = new Round();
  });

  describe('is expected to', function() {
    it("save roll 1 score to the round", function() {
      round.rollOne()
      expect(round.rolls[0]).toBe(round.roll.score)
    });

    it("save roll 2 score to the round", function() {
      round.rollOne()
      round.rollTwo()
      expect(round.rolls[1]).toBe(round.roll.score)
    });

  });

});
