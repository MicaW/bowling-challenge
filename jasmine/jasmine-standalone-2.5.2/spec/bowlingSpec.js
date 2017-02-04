describe('Game' function(){

  var Game;

  beforeEach(function() {
    game = new Game();
  });

  describe('is expected to', function() {
    it("has 10 frames", function() {
      expect(game.frames).toBe(10)
    });

  });

});
