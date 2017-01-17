define(function() {
  var config = {
    /* Cell size */
    CELL_SIZE: 30, // px
    
    /* Key codes */
    KEY_CODE: {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      SPACE: 32
    },
    
    /* Height of the game area */
    FIELD_HEIGHT: 200, // px
    
    /* Current speed */
    SPEED: 4, // max 9
    
    /* Max speed */
    MAX_SPEED: 9,
    
  };
  
  return config;
});