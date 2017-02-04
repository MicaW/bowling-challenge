describe('Game', function(){

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('is expected to', function() {
    it("have 10 frames", function() {
      expect(game.frames).toBe(10)
    });

  });

});
