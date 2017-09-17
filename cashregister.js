function checkCashRegister(price, cash, cid) {
  var change = [];
  var changearray = [];
  
  var changedue = cash - price;
  var cidtotal = cid.reduce(function(prev,curr){
    return prev + curr[1];
  }, 0);
  cidtotal = Math.round(100 * cidtotal)/100;
  
  if(cidtotal == changedue){
    return "Closed";
  }
  
  var cidObj = cid.reduce(function(prev,curr){
    prev[curr[0]] = curr[1];
    return prev;
  }, {});
  
  function changeUnit(change, changedue, cid, unit, unitNum){
    if (cid[unit] === 0) return [change, changedue];
    var unitsAvailable = cid[unit]/unitNum;
    unitsAvailable = Math.round(unitsAvailable);
    var unitsNeeded = (changedue - (changedue % unitNum))/unitNum;
    if(unitsNeeded === 0){
      return [change, changedue];
    }
    else if(unitsAvailable <= unitsNeeded){
      change.push([unit, cid[unit]]);
      changedue -= cid[unit];
    } else {
      change.push([unit, unitsNeeded*unitNum]);
      changedue -= unitsNeeded*unitNum;
    }    
    changedue = Math.round(changedue * 100)/100;
    return [change,changedue];
  }
  
  changeArray = changeUnit(change, changedue, cidObj, "ONE HUNDRED", 100);
  changeArray = changeUnit(changeArray[0],changeArray[1], cidObj, "TWENTY", 20);
  changeArray = changeUnit(changeArray[0],changeArray[1], cidObj, "TEN", 10);
  changeArray = changeUnit(changeArray[0],changeArray[1], cidObj, "FIVE", 5);  
  changeArray = changeUnit(changeArray[0],changeArray[1], cidObj, "ONE", 1);
  changeArray = changeUnit(changeArray[0],changeArray[1], cidObj, "QUARTER", 0.25);
  changeArray = changeUnit(changeArray[0],changeArray[1], cidObj, "DIME", 0.1);
  changeArray = changeUnit(changeArray[0],changeArray[1], cidObj, "NICKEL", 0.05);
  changeArray = changeUnit(changeArray[0],changeArray[1], cidObj, "PENNY", 0.01);
  
  if(changeArray[1] > 0){
    return "Insufficient Funds"
  }
  // Here is your change, ma'am.
  return changeArray[0];
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

