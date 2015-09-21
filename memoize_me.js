var getElems = ( function() {
  var cache = {};

  function wat(id) {
    if (id in cache) {
      return cache[id];
    }
    cache[id] = document.getElementById(id);
    return cache[id];
  }
  return wat;
})();

var qSelect = ( function() {
  var cache = {};

  function huh(selector) {
    if (selector in cache) {
      return cache[selector];
    }
    cache[selector] = querySelector(selector);
    return cache[selector];
  }
  return huh;
})();