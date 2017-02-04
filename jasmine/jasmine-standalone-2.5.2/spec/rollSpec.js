describe('Roll', function(){

  var roll;

  beforeEach(function() {
    roll = new Roll();
  });

  describe('is expected to', function() {
    it("generate a random score from 0 - 10 when player bowls roll 1", function() {
      roll.randomScore();
      expect(roll.score).not.toBeLessThan(0);
      expect(roll.score).toBeLessThan(11);
    });

  });

});
