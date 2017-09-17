function where(collection, source) {
  var arr = [];
  // What's in a name?
  var sourceKeys = Object.keys(source);
  console.log(sourceKeys);
  
  for(var i = 0; i < collection.length; i++){
   var check = true;
    
     for(var j = 0; j < sourceKeys.length; j++){
      console.log(sourceKeys[j]);
       if(collection[i][sourceKeys[j]] == source[sourceKeys[j]]){
         // do nothing
       } else {
         check = false;
       }
     }
        
    if(check){
      arr.push(collection[i]);
    }
  }
  
  
  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
