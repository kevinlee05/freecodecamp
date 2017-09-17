function smallestCommons(arr) {
  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null, arr);
  var result = 1;
  while(true){
     if(checkCM(result, min, max)){
       return result;
     }
    result++;
  }
}

function checkCM(num, min, max){
     for(i = min; i <= max; i++){
      if (num % i !== 0){  

        return false;
      }
    }
    return true;
  
}



smallestCommons([1,5]);
