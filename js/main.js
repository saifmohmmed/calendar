/*
 Calendar (part 2)
 AUTHOR: Saif Badr
         07/07/2020 
*/

var calendar = {}; //global object

//Load JSON file
$.ajax({
    url : 'holydays.json',
    type : 'get',
    async : false
}).then(data =>{
    calendar.holidays = data;
}).catch(data=>{
    console.error(data);
}).always(()=>{initiate()});

// registering event handlers
document.addEventListener("DOMContentLoaded", main, false);

// entry point
function main()
{
    calendar.calDate = document.getElementById("date");
    calendar.calMonth = document.getElementById("month_name");
    calendar.cal = new Calendar();
    initiate();
}

function initiate()
{
    calendar.calMonth.innerHTML = calendar.cal.getMonthString() + " " + calendar.cal.year;
    let dateCount = calendar.cal.getDaysOfMonth();
    let firstDay = calendar.cal.getFirstDayOfMonth();
    let lastDay = calendar.cal.getLastDayOfMonth();
    let prevLastDate = calendar.cal.getLastDateOfPreviousMonth();
    let html = "";

    for(let i = (firstDay - 1); i >= 1; --i)
    {
        let date = prevLastDate - i + 1;
        html += "<div id='otherMonthDate" + date + "' class='otherMonthDate'>" + date + "</div>";
    }

    for(let i = 1; i <= dateCount; ++i)
    {
        var holyday = getHoliday(calendar.cal.year, calendar.cal.month, i);
        html += "<div id='currentMonthDate" + i + "' class='currentMonthDate";
        if(i == calendar.cal.date && calendar.cal.currentMonth == calendar.cal.month && calendar.cal.currentYear == calendar.cal.year){
            html += " today";
        }
        if(holyday != undefined) {
            html += " holyday";
        }
        html += "'>" + i ;
        if(holyday != undefined) {
            html+= "<p>"+holyday+"</p>";
        }
        html+="</div>";
    }

    for(let i = lastDay + 1, z = 1; i <= 7; ++i, ++z)
    {
        html += "<div id='otherMonthDate" + z + "' class='otherMonthDate'>" + z + "</div>";
    }

    calendar.calDate.innerHTML = html;
}

function getHoliday(year, month, day) {
    var holyday;
    try {
        holyday = calendar.holidays == undefined ? undefined : calendar.holidays[year][month][day];
    }catch (e){}
    return holyday;
}

document.getElementById('previous').addEventListener('click',function(){
    calendar.cal.previousMonth();
    initiate();
});

document.getElementById('next').addEventListener('click', function(){
    calendar.cal.nextMonth();
    initiate();
});
