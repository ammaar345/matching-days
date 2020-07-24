
let matchdays = MatchingDays();
var firstDate = document.querySelector(".date1");
var secDate = document.querySelector(".date2");


result.innerHTML = matchTemplate({ days: matchdays.dayStyles() });
function change() {

   var firstVal = firstDate.value;
   var secVal = secDate.value;
   var date = new Date(firstVal);
   var date2 = new Date(secVal);
   var dayVal1 = date.getDay();
   var dayVal2 = date2.getDay()
   matchdays.setDayOfWeek(dayVal1)

   matchdays.setDayOfWeek2(dayVal2)
   matchdays.dayStyles()


   result.innerHTML = matchTemplate({ days: matchdays.dayStyles() });

}
firstDate.addEventListener("change", change)
secDate.addEventListener("change", change)