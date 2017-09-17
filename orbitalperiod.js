function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  function orbital(rad, GM){
    return 2 * Math.PI * Math.sqrt(Math.pow(rad, 3)/GM);
  }
  
  return arr.map(function(elm){
    var result = {};
    result.name = elm.name;
    result.orbitalPeriod = Math.round(orbital(earthRadius + elm.avgAlt, GM));
    return result;
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
