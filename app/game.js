define(['app/shape', 'app/utils', 'app/config'], function(Shape, utils, config) {
  
  /**
   * Game
   * @constructor
   */
  var Game = function() {
    this.shape = null;
    this.WIDTH = 10 * config.CELL_SIZE;
    this.HEIGHT = 15 * config.CELL_SIZE;
  };
  
  /** 
   * Starts the game.
   */
  Game.prototype.init = function() {
    var shapeConfig = utils.getRandomKey(Shape.initConfig);
    this.shape = new Shape(shapeConfig);
    
    // Init playing field.
    var element = document.getElementById('game-area');
    element.innerHTML = '';
    element.style.width = this.WIDTH + 'px';
    element.style.height = this.HEIGHT + 'px';
    
    // Key code event handlers.
    var keydownHandler = function(event) {
        if (event.keyCode === config.KEY_CODE.UP) {  
          this.shape.rotate();
        }
    };
    document.addEventListener('keydown', keydownHandler.bind(this));
  };
  
  return new Game();
});