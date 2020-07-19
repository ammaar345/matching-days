
 let matchdays=MatchingDays();
 var firstDate=document.querySelector(".date1");
 var secDate=document.querySelector(".date2");
 var sun=document.querySelector(".sun");
 var mon=document.querySelector(".mon");
 var tue=document.querySelector(".tue");
 var wed=document.querySelector(".wed");
 var thurs=document.querySelector(".thurs");
 var fri=document.querySelector(".fri");
 var sat=document.querySelector(".sat");
 
 
//  
function checkMatch(dateParam, dateParam2) {
   


   // console.log(day1Num)
   // console.log(day2Num)
   sun.classList.remove("mag");
   mon.classList.remove("blue");
   tue.classList.remove("yellow");
   wed.classList.remove("orange");
   thurs.classList.remove("red");
   fri.classList.remove("coral");
   sat.classList.remove("blue");
 
   if (matchdays.getDay(dateParam) === 0 || (matchdays.getDay2(dateParam2) === 0)){
      sun.classList.add("mag")
   }
    if (matchdays.getDay(dateParam) === 1 || (matchdays.getDay2(dateParam2)  ===1)) {
      mon.classList.add("blue")
   }
    if (matchdays.getDay(dateParam)=== 2 || (matchdays.getDay2(dateParam2)  === 2)) {
      tue.classList.add("yellow")
   }
    if (matchdays.getDay(dateParam) === 3 || (matchdays.getDay2(dateParam2)  === 3)) {
      wed.classList.add("orange")
   }
    if (matchdays.getDay(dateParam) === 4 || (matchdays.getDay2(dateParam2)  === 4)) {
      thurs.classList.add("red")
   }
   if (matchdays.getDay(dateParam) === 5 || (matchdays.getDay2(dateParam2)  === 5)) {
      fri.classList.add("coral")
   }
   if (matchdays.getDay(dateParam) === 6 || (matchdays.getDay2(dateParam2)  === 6)) {
      sat.classList.add("blue")
   }
  else if (matchdays.getDay(dateParam) === matchdays.getDay2(dateParam2) ) {
      
  }

 
}
 function change(){

    var firstVal=firstDate.value;
    var secVal=secDate.value;
    checkMatch(firstVal,secVal)
 }
 
 firstDate.addEventListener("change",change)
 secDate.addEventListener("change",change)