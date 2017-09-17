function permAlone(str) {
  var permutations = [];
  var strArray = str.split("");
  var result = 0;
  
  //heap's algorithm for generating permutations
  function generate(n, A){
    if (n === 1){
      permutations.push(A.join(""));
    }      
    else {
        for (var i = 0; i < n - 1; i++) {
            generate(n - 1, A);
            if (n % 2 === 0) {
              var temp = A[i];
              A[i] = A[n-1];
              A[n-1] = temp;
            }
            else{
              var temp2 = A[0];
              A[0] = A[n-1];
              A[n-1] = temp2;            
            }
                      
        }
        generate(n - 1, A);
    }           
  }
  
  function checkRepeat(arr){
    for(var i = 0; i< arr.length - 1; i++){
      if(arr[i] == arr[i+1]){
        return true;
      }
    }
      return false;
  }
  
  generate(strArray.length, strArray);
  
  console.log(permutations);
  for(var i = 0; i< permutations.length; i++){
    if(!checkRepeat(permutations[i].split(""))){
      result += 1;
    }
  }
  
  return result;
}

permAlone('aab');
