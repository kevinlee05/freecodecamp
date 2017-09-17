function steamroller(arr) {
  // I'm a steamroller, baby
  var result = [];
  
  flatten(arr, result);
  
  function flatten(arr, result){
    for(var i = 0; i < arr.length; i++){
      if (Array.isArray(arr[i]) ){
        flatten(arr[i], result);
      } else {
        result.push(arr[i]);
      }
    }  
  }
  
  
  return result;
}

steamroller([1, [2], [3, [[4]]]]);

