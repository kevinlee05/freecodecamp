function myReplace(str, before, after) {
  var checkUpper = (before.split("")[0] == before.split("")[0].toUpperCase());
  var afterUpper;
  if(checkUpper) {
    var array = after.split("");
    array[0] = array[0].toUpperCase();
    afterUpper = array.join("");
  } else {
    afterUpper = after;
  }
  var strsplit = str.split(" ");
  strsplit[strsplit.indexOf(before)] = afterUpper;
  
  return strsplit.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
