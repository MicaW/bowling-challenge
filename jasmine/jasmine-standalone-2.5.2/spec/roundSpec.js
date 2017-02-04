describe('Round', function(){

  var round;

  beforeEach(function() {
    round = new Round();
  });

  describe('is expected to', function() {
    it("have 2 rolls", function() {
      expect(round.rolls).toBe(2)
    });

  });

});
