describe('Round', function(){

  var round;
  var roll = jasmine.createSpy('roll');
   spyOn(roll, 'bowl').and.callThrough();
   spyOn(roll, 'score').and.callThrough();


  beforeEach(function() {
    round = new Round();
  });

  describe('is expected to', function() {
    it("save roll score to the round", function() {
      roll.bowl
      expect(round.rolls[0]).toBe(roll.score)
    });

  });

});
