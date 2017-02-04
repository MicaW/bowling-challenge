describe('Roll', function(){

  var roll;

  beforeEach(function() {
    roll = new Roll();
  });

  describe('is expected to', function() {
    it("generate a random score from 1 - 10 when player bowls", function() {
      roll.bowl();
      expect(roll.score()).toBe(1..10);
    });

  });

});
