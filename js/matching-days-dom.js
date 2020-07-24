
let matchdays = MatchingDays();
var firstDate = document.querySelector(".date1");
var secDate = document.querySelector(".date2");

// var tempObjStart = matchdays.dayStyles()
result.innerHTML = matchTemplate({ days: matchdays.dayStyles() });
function change() {
   // result.innerHTML = ""
   var firstVal = firstDate.value;
   var secVal = secDate.value;
   var date = new Date(firstVal);
   var date2 = new Date(secVal);
   var dayVal1 = date.getDay();
   var dayVal2 = date2.getDay()
      matchdays.setDayOfWeek(dayVal1)
      console.log(firstVal)
      matchdays.setDayOfWeek2(dayVal2)
     matchdays.dayStyles()
      console.log(secVal)
  
   result.innerHTML = matchTemplate({ days: matchdays.dayStyles() });

}
firstDate.addEventListener("change", change)
secDate.addEventListener("change", change)