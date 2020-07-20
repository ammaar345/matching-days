function MatchingDays() {
    var week= ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    function getDay(dateParam) {
        var day1 = new Date(dateParam);
        var day1Num = day1.getDay();
        for(var i=0 ; i<week.length;i++){
            var dayOfWeek=week[day1Num];
            console.log(dayOfWeek)
            return dayOfWeek;


            }
        
        return day1Num;
    }
    function getDay2(dateParam2) {

        var day2 = new Date(dateParam2);

        var day2Num = day2.getDay();
        for(var i=0 ; i<week.length;i++){
            var dayOfWeek=week[day2Num];
            console.log(dayOfWeek);


            }
        return dayOfWeek;
    }
  function dayStyles(){
    const days=[{day:"Sunday",style:"mag"},{day:"Monday",style:"blue"},{day:"Tuesday",style:"yellow"},{day:"Wednesday",style:"orange"},{day:"Thursday",style:"red"},{day:"Friday",style:"coral"},{day:"Saturday",style:"blue"}]
return days ;


  }
    return {
        getDay,
        getDay2,
dayStyles
    }

}
