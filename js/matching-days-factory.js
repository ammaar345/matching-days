function MatchingDays() {
   var dayindex;
   var dayindex2;
    function getDayOfWeek(day) {
  dayindex=day
        
    }
    function getDayOfWeek2(day2) {
        
dayindex2=day2;

    }

    function dayStyles(date,date2) {
        const days = [{ day: "Sunday", style: "" }
            , { day: "Monday", style: "" },
        { day: "Tuesday", style: "" }
            , { day: "Wednesday", style: "" }
            , { day: "Thursday", style: "" }
            , { day: "Friday", style: "" }
            , { day: "Saturday", style: "" }]
 if (dayindex & dayindex2 & date===date2) {
 days[dayindex].style="green";
days[dayindex2].style="green"
 }   
 else if(dayindex & dayindex2 & !date===date2)
 {days[dayindex].style=

 } 

       
       
       
       
            return days;


    }
    return {
        getDayOfWeek,
        getDayOfWeek2,
        dayStyles
    }

}
