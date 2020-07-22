function MatchingDays() {
   var dayindex;
   var dayindex2;
    function getDay(day) {
  dayindex=day

        
     
    }
    function getDay2(day2) {
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
days[index].style=" ";

 }     

       
       
       
       
            return days;


    }
    return {
        getDay,
        getDay2,
        dayStyles
    }

}
