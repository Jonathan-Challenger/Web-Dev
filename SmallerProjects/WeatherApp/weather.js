// Declaring DOM variables 
const date = document.getElementById("clock");
const container = document.getElementsByClassName("container")[0];
const element = document.querySelectorAll(".element");
let nodes = Array.from(element);
const add = document.getElementById("add-button");

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

// Creating functionality for the add city button

/* fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=970c6d1962aa81ad5f1deb35d48f3007")
    .then(data => data.json())
    .then(data => console.log(data.main)); */

add.addEventListener("click", () => {
    nodes.push("hi");
    console.log(nodes);
})

// Creating functionality for the delete button
for (let i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', (e) => {
        if (e.target.tagName === "BUTTON") {
            const button = e.target;
            const par = button.parentNode;
            const gpar = par.parentNode;
            if (button.textContent === "X") {
                gpar.removeChild(par);
            }
            nodes = nodes.filter(item => item !== nodes[i]);
            console.log(nodes);//
        }
    })
}

/* 
TRY USING CREATEELEMENT() TO CREATE A DIV AND THEN FILL IT, THEN USE APPENDCHILD() TO ADD IT TO CONTAINER DIV.
https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893
*/





