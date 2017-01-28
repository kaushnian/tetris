define(['app/config'], function(config) {
  var Block = function(x, y) {
    this.position = {
        x: x,
        y: y
    };
    this.element = document.createElement('div');
    this.element.className = 'block';
    this.element.style.width = config.CELL_SIZE + 'px';
    this.element.style.height = config.CELL_SIZE + 'px';
    this.move();
    document.getElementById('game-area').appendChild(this.element);
  };
  
  Block.prototype.move = function() {
    this.element.style.left = this.position.x * config.CELL_SIZE + 'px';
    this.element.style.top = this.position.y * config.CELL_SIZE + 'px';
};
  
  return Block;
});