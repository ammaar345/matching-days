
let matchdays = MatchingDays();
var firstDate = document.querySelector(".date1");
var secDate = document.querySelector(".date2");

var tempObjStart = matchdays.dayStyles()
result.innerHTML = matchTemplate({ days: tempObjStart });
function change() {
   result.innerHTML = ""
   var firstVal = firstDate.value;
   var secVal = secDate.value;
   var date = new Date(firstVal);
   var date2 = new Date(secVal);
   var dayVal1 = date.getDay();
   var dayVal2 = date2.getDay()
   if (firstVal) {
      matchdays.setDayOfWeek(dayVal1)
      var tempObj = matchdays.dayStyles()
   }
   if (secVal) {
      matchdays.setDayOfWeek2(dayVal2)
      var tempObj = matchdays.dayStyles()
   }
   result.innerHTML = matchTemplate({ days: tempObj });

}
firstDate.addEventListener("change", change)
secDate.addEventListener("change", change)