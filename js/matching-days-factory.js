function MatchingDays() {
    function getDay(dateParam) {
        var day1 = new Date(dateParam);
        var day1Num = day1.getDay();
        return day1Num;
    }
    function getDay2(dateParam2) {

        var day2 = new Date(dateParam2);

        var day2Num = day2.getDay();
        return day2Num;
    }
  
    return {
        getDay,
        getDay2

    }

}
