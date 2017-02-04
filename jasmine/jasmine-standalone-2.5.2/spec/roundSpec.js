describe('Round', function(){

  var round;

  beforeEach(function() {
    round = new Round();
  });

  describe('is expected to', function() {
    it("save roll score to the round", function() {
      round.rollOne()
      expect(round.rolls[0]).toBe(round.roll.score)
    });

  });

});
