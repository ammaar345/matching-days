function MatchingDays() {
   var dayindex;
   var dayindex2;
    function setDayOfWeek(day) {
  dayindex=day
        
    }
    function setDayOfWeek2(day2) {
        
dayindex2=day2;

    }

    function dayStyles() {
      
        const days = [{ day: "Sunday", style: "" }
            , { day: "Monday", style: "" },
        { day: "Tuesday", style: "" }
            , { day: "Wednesday", style: "" }
            , { day: "Thursday", style: "" }
            , { day: "Friday", style: "" }
            , { day: "Saturday", style: "" }]
 if (dayindex & dayindex2 & dayindex===dayindex2) {
 days[dayindex].style="green";

 }   
 else if(dayindex & dayindex2 & !dayindex===dayindex2)
 {
days[dayindex].style="red";
days[dayindex2].style="yellow"
 } 

       
       
       
       
            return days;


    }
    return {
        setDayOfWeek,
        setDayOfWeek2,
        dayStyles
    }

}
