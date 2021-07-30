// Declaring DOM variables 
const date = document.getElementById("clock");
const container = document.getElementsByClassName("container")[0];
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


add.addEventListener('click', (e) => {
    e.preventDefault();
    const myLi = document.createElement("li");
    myLi.classList.add("element");
    myLi.innerHTML = `<span class="city-name">City <sup>AUS</sup></span>
    <span class="temp">25 <sup>°C</sup></span>
    <span class="description">Sun with Cloud</span>
    <button type="button" class="remove">X</button>`;
    container.appendChild(myLi);

    const del = document.querySelectorAll(".remove")
    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener('click', () => {
            del[i].parentElement.style.display = "none";
        });
    }

});

/* 
TRY USING CREATEELEMENT() TO CREATE A DIV AND THEN FILL IT, THEN USE APPENDCHILD() TO ADD IT TO CONTAINER DIV.
https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893
*/





