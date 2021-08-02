// Declaring DOM variables 
const container = document.getElementsByClassName("container")[0];
const add = document.getElementById("add-button");

days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Creating functionality for the add city button

add.addEventListener('click', (e) => {
    e.preventDefault();
    const api_key = '970c6d1962aa81ad5f1deb35d48f3007';
    const url_base = 'https://api.openweathermap.org/data/2.5'
    const input = document.getElementById('input-text');
    const url = `${url_base}/weather?q=${input.value}&appid=${api_key}&units=metric`;
    
    fetch(url).then(res => res.json()).then(data => {
    // Creating variables needed for Date
    const { main, name, sys, weather, timezone, wind } = data;
    const dif = timezone / 3600;
    let d = new Date();
    let hours = d.getHours();
    d.setHours(d.getHours() + dif - 1);

    // Creates list element and then adds information based on users query
    const myLi = document.createElement("li");
    myLi.classList.add("element");
    myLi.innerHTML = `<span class="city-name">${name}<sup>${sys.country}</sup></span>
    <span class="timezone">${d.toLocaleString('en-GB', {dateStyle:'medium', timeStyle:'short'})}</span>
    <span class="temp">${Math.round(main.temp)}<sup>°C</sup></span>
    <span class="extra">Humidity: ${main.humidity}% <br> Wind Speed: ${wind.speed}mph</span>
    <span class="description">${weather[0]['description']}</span>
    <button type="button" class="remove">X</button>`;
    container.appendChild(myLi);

    // Reset input value to blank
    input.value = '';
    
    // Deletes the element when button is clicked
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
