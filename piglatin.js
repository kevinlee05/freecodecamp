function translate(str) {
  var split = str.split("");
  
  if( "aeiou".split("").indexOf(split[0]) !== -1 ){
    return split.join("") + "way";
  } else {
    while("aeiou".split("").indexOf(split[0]) == -1){
      var l = split.shift();
      split.push(l);
    }
    return split.join("") + "ay";
  }
      
}

translate("consonant");
