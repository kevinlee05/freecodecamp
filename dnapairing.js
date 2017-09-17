function pair(str) {
  var result = [];
  var array = str.split("");
  
  array.forEach(function(elm){
    switch(elm){
      case "A":
        result.push(["A","T"]);
        break;
      case "T":
        result.push(["T","A"]);
        break;
      case "C":
        result.push(["C","G"]);
        break;
      case "G":
        result.push(["G","C"]);
        break;
    }
  });
  
  return result;
}

pair("GCG");
