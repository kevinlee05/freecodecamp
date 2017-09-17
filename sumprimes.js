function sumPrimes(num) {
  var result = 0;
  for (var i = 1; i <= num; i++ ){
    if (isPrime(i)){
      console.log(i);
      result += i;
    }
  }
  
  return result;
}


function isPrime(num){
  if(num === 1){
    return false;
  }
  if (num === 2){
    return true;
  }
  for (var i = 2; i< num; i++){
    if (num % i === 0){
      return false;      
    }
  }
  return true;
}

sumPrimes(10);
