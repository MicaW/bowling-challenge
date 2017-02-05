describe('Game', function(){

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('is expected to', function() {
    it("save the round score to the game score", function() {
      game.round.rollOne()
      game.round.rollTwo()
      game.round.totalRoundScore()
      game.addRoundScore()
      expect(game.rounds[0]).toBe(game.round.totalRoundScore())
    });

  });

});
