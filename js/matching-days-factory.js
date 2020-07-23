function MatchingDays() {
    var dayindex;
    var dayindex2;
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
        if ((dayindex === 0) || (dayindex2 === 0)) {
            if (dayindex !== dayindex2) {
                days[dayindex].style = "red";
                days[dayindex2].style = "yellow"
            }
            else if (dayindex === dayindex2) {
                days[dayindex].style = "green";
            }
        }
        if (dayindex && dayindex2 && dayindex !== dayindex2) {
            days[dayindex].style = "red";
            days[dayindex2].style = "yellow"

        } else if (dayindex && dayindex2 && dayindex === dayindex2) {
            days[dayindex].style = "green";

        }





        return days;


    }
    return {
        setDayOfWeek,
        setDayOfWeek2,
        dayStyles
    }

}
