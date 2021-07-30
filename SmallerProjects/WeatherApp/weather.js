// Declaring DOM variables 
const date = document.getElementById("clock");
const element = document.querySelectorAll(".element");

// Declaring days and months for time formatting
days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Creating a function to display the date and time and update
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

// Creating Functionality for the delete button
for (let i = 0; i < element.length; i++) {
    element[i].addEventListener('click', (e) => {
        if (e.target.tagName === "BUTTON") {
            const button = e.target;
            const par = button.parentNode;
            const gpar = par.parentNode;
            if (button.textContent === "X") {
                gpar.removeChild(par);
            }
        }
    })
}

