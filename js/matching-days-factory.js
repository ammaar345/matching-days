function MatchingDays() {
   var index;
   var index2;
    function getDay(day) {
  index=day

        
     
    }
    function getDay2(day2) {
index2=day2;
      
    }

    function dayStyles(date,date2) {
        const days = [{ day: "Sunday", style: "" }
            , { day: "Monday", style: "" },
        { day: "Tuesday", style: "" }
            , { day: "Wednesday", style: "" }
            , { day: "Thursday", style: "" }
            , { day: "Friday", style: "" }
            , { day: "Saturday", style: "" }]
 if (date===date2) {
days[].style=""
 }     

       
       
       
       
            return days;


    }
    return {
        getDay,
        getDay2,
        dayStyles
    }

}
