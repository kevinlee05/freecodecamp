function unite(arr1, arr2, arr3) {
  var result = [];
  
  for(var i = 0; i < arguments.length; i++){
    for(var j = 0; j < arguments[i].length; j++){
      if(result.indexOf(arguments[i][j]) == -1 ){
        result.push(arguments[i][j]);
      }
    }
  }
  
  return result;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
