function convert(num) {
  var digits = [];
  for(var i = 10; i <= 10000; i *= 10) {
    digits.unshift(num % i);
    num -= num % i;
  }
  
  var letters = [];
  
  function romanThousands(num){
    var result = "";
    if (num === 0 ){
      return "";
    } else {
      var i = 1;
      while( i <= num/1000) {
        result += "M";
        i++;
      }
      return result;
    }
  }
  
  function romanHundreds(num){
    if (num === 0){
      return "";
    } else {
      switch(num){
        case 100:
          return "C"; 
        case 200:
          return "CC";
        case 300:
          return "CCC";
        case 400:
          return "CD";
        case 500:
          return "D";
        case 600:
          return "DC";
        case 700:
          return "DCC";
        case 800:
          return "DCCC";
        case 900:
          return "CM";
      }
    }
  }
  
  function romanTens(num){
    if (num === 0){
      return "";
    } else {
      switch(num){
        case 10:
          return "X"; 
        case 20:
          return "XX";
        case 30:
          return "XXX";
        case 40:
          return "XL";
        case 50:
          return "L";
        case 60:
          return "LX";
        case 70:
          return "LXX";
        case 80:
          return "LXXX";
        case 90:
          return "XC";
      }
    }
  }
  
  function romanOnes(num){
    if (num === 0){
      return "";
    } else {
      switch(num){
        case 1:
          return "I"; 
        case 2:
          return "II";
        case 3:
          return "III";
        case 4:
          return "IV";
        case 5:
          return "V";
        case 6:
          return "VI";
        case 7:
          return "VII";
        case 8:
          return "VIII";
        case 9:
          return "IX";
      }
    }
  }
  
  letters.push(romanThousands(digits[0]));
  letters.push(romanHundreds(digits[1]));
  letters.push(romanTens(digits[2]));
  letters.push(romanOnes(digits[3]));
  
  return letters.join(); 
}

convert(36);
