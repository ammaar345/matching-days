
describe("Testing styling day of week function.", function () {

    it("should return yellow and red in the styling of tuesday and friday since the days are different.", function () {
        let matchingdays = MatchingDays()
        var date1st = "2020-07-10";
        var date2nd = "2020-07-14";
        var date1stValue = new Date(date1st);
        var date2ndValue = new Date(date2nd);
        var date1Var = date1stValue.getDay()
        var date2Var = date2ndValue.getDay()
        matchingdays.setDayOfWeek(date1Var);
        matchingdays.setDayOfWeek2(date2Var)

        assert.deepEqual([{ day: "Sunday", style: "" }
            , { day: "Monday", style: "" },
        { day: "Tuesday", style: "yellow" }
            , { day: "Wednesday", style: "" }
            , { day: "Thursday", style: "" }
            , { day: "Friday", style: "red" }
            , { day: "Saturday", style: "" }], matchingdays.dayStyles());
    });
    it("should return green since the two dates occur on the same day of the week.", function () {
        let matchingdays = MatchingDays()
        var date1st = "2020-07-05";
        var date2nd = "2020-07-26"
        var date1stValue = new Date(date1st)
        var date2ndValue = new Date(date2nd)
        var date1Var = date1stValue.getDay()
        var date2Var = date2ndValue.getDay()
        matchingdays.setDayOfWeek(date1Var)
        matchingdays.setDayOfWeek2(date2Var)
        assert.deepEqual([{ day: "Sunday", style: "green" }
            , { day: "Monday", style: "" },
        { day: "Tuesday", style: "" }
            , { day: "Wednesday", style: "" }
            , { day: "Thursday", style: "" }
            , { day: "Friday", style: "" }
            , { day: "Saturday", style: "" }], matchingdays.dayStyles());
    });
    it("should return red and yellow in the styles of the days monday and wednesday since the days are different.", function () {
        let matchingdays = MatchingDays()

        var date1st = "2020-07-13";
        var date2nd = "2020-07-15"
        var date1stValue = new Date(date1st)
        var date2ndValue = new Date(date2nd)
        var date1Var = date1stValue.getDay()
        var date2Var = date2ndValue.getDay()
        matchingdays.setDayOfWeek(date1Var)
        matchingdays.setDayOfWeek2(date2Var)
        assert.deepEqual([{ day: "Sunday", style: "" }
            , { day: "Monday", style: "red" },
        { day: "Tuesday", style: "" }
            , { day: "Wednesday", style: "yellow" }
            , { day: "Thursday", style: "" }
            , { day: "Friday", style: "" }
            , { day: "Saturday", style: "" }], matchingdays.dayStyles());
    });


    it("should return yellow and red in the styles of the days Sunday and Monday since the days are different.", function () {

        let matchingdays = MatchingDays()
        var date1st = "2020-07-06";
        var date2nd = "2020-07-05"
        var date1stValue = new Date(date1st)
        var date2ndValue = new Date(date2nd)
        var date1Var = date1stValue.getDay()
        var date2Var = date2ndValue.getDay()
        matchingdays.setDayOfWeek(date1Var)
        matchingdays.setDayOfWeek2(date2Var)
        assert.deepEqual([{ day: "Sunday", style: "yellow" }
            , { day: "Monday", style: "red" },
        { day: "Tuesday", style: "" }
            , { day: "Wednesday", style: "" }
            , { day: "Thursday", style: "" }
            , { day: "Friday", style: "" }
            , { day: "Saturday", style: "" }], matchingdays.dayStyles());
    });
    it("should return green since the two dates occur on the same day of the week.", function () {

        let matchingdays = MatchingDays()
        var date1st = "2020-07-13";
        var date2nd = "2020-07-06"
        var date1stValue = new Date(date1st)
        var date2ndValue = new Date(date2nd)
        var date1Var = date1stValue.getDay()
        var date2Var = date2ndValue.getDay()
        matchingdays.setDayOfWeek(date1Var)
        matchingdays.setDayOfWeek2(date2Var)
        assert.deepEqual([{ day: "Sunday", style: "" }
            , { day: "Monday", style: "green" },
        { day: "Tuesday", style: "" }
            , { day: "Wednesday", style: "" }
            , { day: "Thursday", style: "" }
            , { day: "Friday", style: "" }
            , { day: "Saturday", style: "" }], matchingdays.dayStyles());
    });


})

