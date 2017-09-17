function drop(arr, func) {
  // Drop them elements.
  var result = arr;
  while(!func(result[0])){
    
    result = result.slice(1);
  }
  
  return result;
}

drop([1, 2, 3], function(n) {return n < 3; });

