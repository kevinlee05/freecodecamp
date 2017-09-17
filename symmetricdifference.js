function sym(args) {
  
  
  function symdiff(arr1, arr2){
    var result = [];
    
    for (var elm in arr1){
    if (arr2.indexOf(arr1[elm]) === -1){
        if (result.indexOf(arr1[elm]) === -1){
          result.push(arr1[elm]);  
        }
      }
    } 
    
    for (var elm2 in arr2){
      if (arr1.indexOf(arr2[elm2]) === -1){
        if (result.indexOf(arr2[elm2]) === -1){
        result.push(arr2[elm2]);
        }
       }
    }
    
    return result;
  }
  
  var result = [];
  
  result = symdiff(arguments[0],arguments[1]);
  
  if(arguments.length > 2){
    for(var i = 2; i < arguments.length; i++){
      result = symdiff(result,arguments[i]);
    }  
  }
  

  return result;
  
  
}

sym([1, 1, 2, 5], [2, 2, 3, 5],[3, 4, 5, 5]);
