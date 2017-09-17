function makeFriendlyDates(arr) {
  var dateStart = new Date(arr[0]);
  var dateEnd = new Date(arr[1]);
  var daysBetween = (dateEnd - dateStart)/(24*60*60*1000);
  var result = [];
  var now = new Date();
  
  if(dateStart - dateEnd === 0){
    result[0] = getMonthText(dateStart.getMonth()) + " " + getDateText(dateStart.getDate()) + ", " + dateStart.getFullYear();
  } else if(daysBetween < 365 && dateStart.getFullYear() == now.getFullYear() ){
    if(dateStart.getMonth() == dateEnd.getMonth() && daysBetween < 31){
      result[0] = getMonthText(dateStart.getMonth()) + " " + getDateText(dateStart.getDate());
      result[1] = getDateText(dateEnd.getDate());
    } else {
      result[0] = getMonthText(dateStart.getMonth()) + " " + getDateText(dateStart.getDate());
      result[1] = getMonthText(dateEnd.getMonth()) + " " + getDateText(dateEnd.getDate());
    }
  } else if(daysBetween < 365){
    if(dateStart.getMonth() == dateEnd.getMonth() && daysBetween < 31){
      result[0] = getMonthText(dateStart.getMonth()) + " " + getDateText(dateStart.getDate()) + ", " + dateStart.getFullYear();
      result[1] = getDateText(dateEnd.getDate());
    } else {
      result[0] = getMonthText(dateStart.getMonth()) + " " + getDateText(dateStart.getDate()) + ", " + dateStart.getFullYear();
      result[1] = getMonthText(dateEnd.getMonth()) + " " + getDateText(dateEnd.getDate());
    } 
    
  } else{
      result[0] = getMonthText(dateStart.getMonth()) + " " + getDateText(dateStart.getDate()) + ", " + dateStart.getFullYear();
      result[1] = getMonthText(dateEnd.getMonth()) + " " + getDateText(dateEnd.getDate()) + ", " + dateEnd.getFullYear();    
    
  }
  
  
  function getDateText(num){
    switch(num){
      case 1:
        return "1st";
      case 2:
        return "2nd";
      case 3:
        return "3rd";
      case 21:
        return "21st";
      case 22:
        return "22nd";
      case 23:
        return "23rd";
      case 31:
        return "31st";
      default:
        return num + "th";
    }
  }
  
  function getMonthText(num){
    switch (num){
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
    }
  }
  
  
  return result;
}

makeFriendlyDates(['2018-01-13', '2018-01-13']);
