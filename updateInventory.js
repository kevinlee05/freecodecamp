function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var obj1 = {}, obj2 = {};
    arr1.forEach(function(elm){
      obj1[elm[1]] =  elm[0];
    });
    arr2.forEach(function(elm){
      obj2[elm[1]] =  elm[0];
    });
    
    for(var key in obj2){
      if ( obj1.hasOwnProperty(key)){
        obj1[key] += obj2[key];
      } else {
        obj1[key] = obj2[key];
      }
    }
    var result = [];
    for(var key2 in obj1){
      result.push([obj1[key2], key2]);
    }
  
    result.sort(function(a, b){
      var x = a[1].split("").shift();
      var y = b[1].split("").shift();
      
      return  x.charCodeAt(0) - y.charCodeAt(0) ;
    });         
    
    return result;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
