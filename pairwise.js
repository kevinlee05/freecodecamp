function pairwise(arr, arg) {
  var result = [];
  
  function checkpair(index, arr, arg, result){
    for(var i = index + 1; i < arr.length; i++){
      if(arr[index] + arr[i] == arg){
        if(result.indexOf(i) == -1 && result.indexOf(index) == -1){
          result.push(index);
          result.push(i);      
        }
      }
    }
  }
  
  for(var j = 0; j < arr.length; j++){
    checkpair(j, arr, arg, result);
  }
  
  var final = result.reduce(function(prev,curr){
    return prev + curr;
  }, 0);
  
  return final;
}

pairwise([1,4,2,3,0,5], 7);
