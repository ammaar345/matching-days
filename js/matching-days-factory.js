function MatchingDays() {
    var dayindex=0;
    var dayindex2=0;
    function setDayOfWeek(day) {
        dayindex = day

    }
    function setDayOfWeek2(day2) {

        dayindex2 = day2;

    }

    function dayStyles() {

        const days = [{ day: "Sunday", style: "" }
            , { day: "Monday", style: "" },
        { day: "Tuesday", style: "" }
            , { day: "Wednesday", style: "" }
            , { day: "Thursday", style: "" }
            , { day: "Friday", style: "" }
            , { day: "Saturday", style: "" }]


        if (dayindex === dayindex2) {
            days[dayindex].style = "green";

        }
            
            else{
                days[dayindex2].style = "yellow"
                days[dayindex].style = "red";
                
              
            }
           
                
        return days;
    }
    return {
        setDayOfWeek,
        setDayOfWeek2,
        dayStyles
    }

}
