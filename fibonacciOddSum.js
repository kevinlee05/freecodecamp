function sumFibs(num) {
  var prev = 1, curr = 1, temp = 0, sum = 1;
  while(curr <= num){
    if(curr % 2 == 1){sum += curr;}
    temp = curr;
    curr = curr + prev;
    prev = temp;
    console.log(curr);
  }
  
  return sum;
}

sumFibs(9);
