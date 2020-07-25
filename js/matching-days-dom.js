
let matchdays = MatchingDays();
var firstDate = document.querySelector(".date1");
var secDate = document.querySelector(".date2");

var tempobj = [{ day: "Sunday", style: "" }
   , { day: "Monday", style: "" },
{ day: "Tuesday", style: "" }
   , { day: "Wednesday", style: "" }
   , { day: "Thursday", style: "" }
   , { day: "Friday", style: "" }
   , { day: "Saturday", style: "" }]


result.innerHTML = matchTemplate({ days: tempobj });
function change() {
   result.innerHTML=""
   var firstVal = firstDate.value;
   var secVal = secDate.value;
   if (firstVal) {
      var date = new Date(firstVal);
      var dayVal1 = date.getDay();
      matchdays.setDayOfWeek(dayVal1)
   }
   ///else 
   if (secVal) {
      var date2 = new Date(secVal);
      var dayVal2 = date2.getDay()
      matchdays.setDayOfWeek2(dayVal2)
   }
   result.innerHTML = matchTemplate({ days: matchdays.dayStyles() });
}
firstDate.addEventListener("change", change)
secDate.addEventListener("change", change)