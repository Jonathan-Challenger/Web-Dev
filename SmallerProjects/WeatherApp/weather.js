const date = document.getElementById("clock");

days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function display_c() {
    let refresh = 1000;
    mytime = setTimeout('display_ct()', refresh);
}
function display_ct() {
    let x = new Date();
    day = x.getDay() - 1;
    dayNum = x.getDate();
    month = x.getMonth();
    hours = x.getHours();
    mins = x.getMinutes();
    if( mins < 10) {
        mins = "0"+mins;
    }
    date.innerText = `${days[day]}, ${dayNum} ${months[month]} ${hours}:${mins}`;
    display_c();
}

