describe('Roll', function(){

  var roll;

  beforeEach(function() {
    console.log(1)
    roll = new Roll();
    console.log(2)
  });

  describe('is expected to', function() {
    it("generate a random score from 0 - 10 when player bowls", function() {
      console.log(3)
      roll.bowl();
      console.log(4)
      expect(roll.score).toBeGreaterThan(0);
      expect(roll.score).toBeLessThan(11);
    });

  });

});
