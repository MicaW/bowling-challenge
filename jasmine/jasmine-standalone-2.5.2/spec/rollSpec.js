describe('Roll', function(){

  var roll;

  beforeEach(function() {
    roll = new Roll();
  });

  describe('is expected to', function() {
    it("generate a random score from 0 - 10 when player bowls", function() {
      roll.bowl();
      expect(roll.score).toBeGreaterThan(0);
      expect(roll.score).toBeLessThan(10);
    });

  });

});
