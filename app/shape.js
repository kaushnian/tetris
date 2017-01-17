define(['block'], function(Block) {
  
  /**
   * Shape.
   * @constructor
   */
  var Shape = function (initConfig) {
    this.initConfig = initConfig;
    this.blocks = [];
    this.position = initConfig.position;
    this.pivot = {x: 2, y: 2};
    this.build();
  };
  
  var initPosition = {
    x: 3,
    y: 0
  };
  
  /**
   * Shape config.
   * @static
   */
  Shape.initConfig = {
    STICK: {
      blocks: [{x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}, {x: 2, y: 3}],
      position : {
        x: initPosition.x + 2,
        y: initPosition.y
      }
    },
    TTURN: {
      blocks: [{x: 2, y: 2}, {x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}],
      position : initPosition
    },
    SQUARE: {
      blocks: [{x: 2, y: 2}, {x: 3, y: 2}, {x: 2, y: 3}, {x: 3, y: 3}],
      position : {
        x: initPosition.x + 2,
        y: initPosition.y
      }
    },
    RSNAKE: {
      blocks: [{x: 2, y: 2}, {x: 3, y: 2}, {x: 1, y: 3}, {x: 2, y: 3}],
      position : initPosition
    },
    LSNAKE: {
      blocks: [{x: 1, y: 2}, {x: 2, y: 2}, {x: 2, y: 3}, {x: 3, y: 3}],
      position : initPosition
    },
    RGUN: {
      blocks: [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 1, y: 3}],
      position : initPosition
    },
    LGUN: {
      blocks: [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 3, y: 3}],
      position : initPosition
    }
  };
  
  /**
   * Builds the shape from blocks.
   */
  Shape.prototype.build = function() {
    var that = this;
    _.forEach(this.initConfig.blocks, function(block) {
      that.blocks.push(new Block(block.x, block.y));
    });
  };
  
  /**
   * Rotates the shape.
   */
  Shape.prototype.rotate = function() {
    console.log('Rotate');
    
    var rotationMatrix = {
      x: [0, 1],
      y: [-1, 0]
    };
    
    _.forEach(this.blocks, _.bind(function(block) {
      // Get relative position = block - pivot.
      var startPosition = {};
      startPosition.x = block.position.x - this.pivot.x;
      startPosition.y = block.position.y - this.pivot.y;
      
      // Get end position: Multiply rotation matrix by block's relative position.
      var endPosition = {};
      endPosition.x = rotationMatrix.x[0] * startPosition.x + rotationMatrix.x[1] * startPosition.y;
      endPosition.y = rotationMatrix.y[0] * startPosition.x + rotationMatrix.y[1] * startPosition.y;
      
      // Set block new absolute position: pivot + end position.
      block.position.x = this.pivot.x + endPosition.x;
      block.position.y = this.pivot.y + endPosition.y;
      
      block.move();
    }, this));
  };
  
  return Shape;
});