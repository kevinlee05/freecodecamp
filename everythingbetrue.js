function every(collection, pre) {
  // Is everyone being true?
  for(var i = 0; i < collection.length; i++){
    if(!collection[i][pre]){
      return false;
    }
  }
  return true;
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

