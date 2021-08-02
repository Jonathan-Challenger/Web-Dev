// Declaring DOM variables 
const date = document.getElementById("clock");
const container = document.getElementsByClassName("container")[0];
const add = document.getElementById("add-button");

days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Creating a function to display the date and time and update
/* function display_c() {
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
} */

// Creating functionality for the add city button

add.addEventListener('click', (e) => {
    e.preventDefault();
    const api_key = '970c6d1962aa81ad5f1deb35d48f3007';
    const url_base = 'https://api.openweathermap.org/data/2.5'
    const input = document.getElementById('input-text');
    const url = `${url_base}/weather?q=${input.value}&appid=${api_key}&units=metric`;
    
    fetch(url).then(res => res.json()).then(data => {
    const { main, name, sys, weather, timezone } = data;
    const dif = timezone / 3600;
    let d = new Date();
    const day = d.getDay() - 1;
    const dayNum = d.getDate();
    const month = d.getMonth();
    const hours = d.getHours() - 1 + dif;
    let mins = d.getMinutes();
    if (mins < 10) {
        mins = '0' + mins;
    } 
        

    const myLi = document.createElement("li");
    myLi.classList.add("element");
    myLi.innerHTML = `<span class="city-name">${name}<sup>${sys.country}</sup></span>
    <span class="timezone">${days[day]}, ${dayNum} ${months[month]} ${hours}:${mins}</span>
    <span class="temp">${Math.round(main.temp)}<sup>°C</sup></span>
    <span class="description">${weather[0]['description']}</span>
    <button type="button" class="remove">X</button>`;
    container.appendChild(myLi);

    input.value = '';
    
    const del = document.querySelectorAll(".remove")
    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener('click', () => {
            del[i].parentElement.style.display = "none";
        });
    }
    })
    .catch(() => {
        alert('Please select a valid city!')
    });
});

    



document.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        add.click();
    }
});