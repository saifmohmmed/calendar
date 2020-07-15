/*
 Calendar class JS
 AUTHOR: Saif Badr
         07/07/2020 
*/

class Calendar
{
    constructor(year =null, month=null, date = null)
    {
        this.time = new Date(Date.now());
        if(!(year == undefined || year == null || month == undefined || month == null || date == undefined || date == null))
        {
            this.year = year;
            this.month = month;
            this.date = date;
        }
        else
        {
            this.time = new Date(Date.now());
            this.year =  year == null ? this.time.getFullYear() : year;
            this.month = month == null ? this.time.getMonth() + 1: month;
            this.day = this.time.getDay() + 1;
            this.date = date == null ? this.time.getDate() : date;
        }
        this.currentMonth = this.time.getMonth() + 1;
        this.currentYear = this.time.getFullYear();
    }

    setDate(day)
    {
        this.date = day;
    }

    set(year, month, day)
    {
        this.year = year;
        this.month = month;
        this.date = day;
    }

    setMonth(month)
    {
        this.month = month;
    }

    setYear(year)
    {
        this.year = year;
    }

    getDaysOfMonth()
    {
        return new Date(this.year, this.month, 0).getDate();
    }

    getFirstDayOfMonth()
    {
        return new Date(this.year, this.month-1, 1).getDay() + 1;
    }

    nextMonth() 
    {
        if(this.month +1 >12) 
        {
            this.month = 1;
            this.year = this.year + 1;
        }
        else
        {
            this.month = this.month+1;
        }
    }

    previousMonth() 
    {
        if(this.month - 1 < 1) 
        {
            this.month = 12;
            this.year = this.year - 1;
        }
        else
        {
            this.month = this.month - 1;
        }
    }

    getLastDayOfMonth()
    {
        return new Date(this.year, this.month, 0).getDay() + 1;
    }

    getLastDateOfPreviousMonth()
    {
        return new Date(this.year, this.month-1, 0).getDate();
    }

    getMonthString()
    {
        switch(this.month)
        {
            case 1:  return "January";
            case 2:  return "February";
            case 3:  return "March";
            case 4:  return "April";
            case 5:  return "May";
            case 6:  return "June";
            case 7:  return "July";
            case 8:  return "August";
            case 9:  return "September";
            case 10: return "October";
            case 11: return "November";
            case 12: return "December";
        }
    }

    getDayString()
    {
        switch(this.day)
        {
            case 1:  return "Sunday";
            case 2:  return "Monday";
            case 3:  return "Tuesday";
            case 4:  return "Wednesday";
            case 5:  return "Thursday";
            case 6:  return "Friday";
            case 7:  return "Saturday";
        }
    }
}
