function clock(options) {
    'use strict';
    var getTimes = function () {
            var d = new Date(),
                funcs = {
                    hour: function () {
                        var hour = (options.twentyfour === true) ? d.getHours() : (d.getHours() + 11) % 12 + 1;
                        hour = (options.padzero === true) ? (hour < 10 ? "0" + hour : " " + hour) : hour;
                        return hour;
                    },
                    rawhour: function () {
                        return d.getHours();
                    },
                    minute: function () {
                        return (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
                    },
                    rawminute: function () {
                        return d.getMinutes();
                    },
                    am: function () {
                        return (d.getHours() > 11) ? "pm" : "am";
                    },
                    
                      date: function () {
             var date = d.getDate();
    return date < 10 ? '0' + date : '' + date;       
                    },
                   
                    day: function () {
                        return d.getDay();
                    },
                    month: function () {
                        return d.getMonth();
                    },
                    year: function () {
                        return d.getFullYear();
                    },
                    hourtext: function () {
                        var hourtxt = (options.twentyfour === true) ? ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "Twenty One", "Twenty Two", "Twenty Three", "Twenty Four"] : ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
                        return hourtxt[this.rawhour()];
                    },
                    minuteonetext: function () {
                        var minuteone = ["o Clock", "o One", "o Two", "o Three", "o Four", "o Five", "o Six", "o Seven", "o Eight", "o Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty"];
                        if (minuteone[this.rawminute()] !== undefined) {
                            return minuteone[this.rawminute()];
                        }
                        return "";
                    },
                    minutetwotext: function () {
                        var minutetwo = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", ""];
                        if (minutetwo[this.rawminute()] !== undefined) {
                            return minutetwo[this.rawminute()];
                        }
                        return "";
                    },
                    

                    daytext: function () {
 return weekday[this.day()];
},
                        
                    sdaytext: function () {
                        return sday[this.day()];
                    },

                    monthtext: function () {
                        return month[this.month()];
                    },
                    
                     smonth: function () {
                        return smonth[this.month()];
                    },

                    datetext: function () {
                        var textdate = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth", "Sixteenth", "Seventeenth", "Eightheenth", "Nineteenth", "Twentyith", "TwentyFirst", "TwentySecond", "TwentyThird", 'TwentyFourth', "TwentyFifth", "TwentySixth", "TwentySeventh", "TwentyEight", "TwentyNinth", "Thirtyith", "ThirtyFirst"];
                        return textdate[this.date() - 1];
                    },
                    nth: function (d) {
                        if (d > 3 && d < 21) {
                            return 'th';
                        }
                        switch (d % 10) {
                        case 1:
                            return "st";
                        case 2:
                            return "nd";
                        case 3:
                            return "rd";
                        default:
                            return "th";
                        }
                    },
                    dateplus: function () {
                        return this.date() + this.nth(Number(this.date()));
                    }
                };
            options.success(funcs);
            setTimeout(function () {
                getTimes();
            }, options.refresh);
        };
    getTimes();
}