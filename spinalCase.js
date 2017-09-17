function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var result;
  if(str.indexOf(" ") == -1 && str.indexOf("_") == -1){
    result = str.split("").map(function(elm){
      if(elm === elm.toUpperCase()){
        return "-"+elm.toLowerCase()
      } else {
        return elm;
      }
    }).join("")
  } else {
     result = str.replace(/\s/g, '-')
              .replace(/_/g, '-')
              .split("").map(function(elm){return elm.toLowerCase()})
              .join("");
    
  }
  
  
  return result;
}

spinalCase('thisIsSpinalTap');
