function fearNotLetter(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  if(str.charCodeAt(0) !== "a".charCodeAt(0)){
    return undefined;
  }
  
  for(i=0; i < str.length; i++){
    
    if(str.charCodeAt(i) !== alphabet.charCodeAt(i)){
      return String.fromCharCode(alphabet.charCodeAt(i));  
    }
  }
  
}

fearNotLetter("abce");
