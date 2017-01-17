define(function() {
  var Utils = function () {};
  
  /**
   * Gets random key from obj.
   * param {Object} obj
   * @return {*}
   */
  Utils.prototype.getRandomKey = function (obj) {
    var key, keys = [];
    for(key in obj) {
       if(obj.hasOwnProperty(key)) {
           keys.push(key);
       }
    }
    return obj[keys[Math.floor(Math.random() * keys.length)]];
  }
  
  return new Utils();
})