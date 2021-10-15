// Declaring DOM variables 
const container = document.getElementsByClassName("container")[0];
const add = document.getElementById("add-button");
const search = document.getElementById('input-text');
const autofillList = document.getElementById('fill-list');

// CREATING AUTOCOMPLETE FUNCTIONALITY

// Search cities in json
/* const searchCities = async searchText => {
    const res = await fetch('../WeatherApp/data/city.list.json');
    const cities = await res.json();

    // Get matches
    let matches = cities.filter(city => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return city.name.match(regex)
    });

    if (searchText.length === 0) {
        matches = [];
        autofillList.innerHTML = '';
    }

    outputHTML(matches);
};

// Show results 
const outputHTML = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => {
            if (match.state.length > 0) {
                return `<li class="suggestion">
                <div class="specifics">${match.name},
                ${match.state},
                ${match.country}</div> 
                </li>`
            } else {
                return `<li class="suggestion">
                <div class="specifics">${match.name},
                ${match.country}</div>
                </li>`
            }
        })
        .join('');
    
    autofillList.innerHTML = html;

    }
}

search.addEventListener('input', () => searchCities(search.value));


autofillList.addEventListener('click', (e) => {
    let item = e.target;
    search.value = item.innerText.toLowerCase();
    autofillList.innerHTML = '';
}); */




// CREATING ADD BUTTON
add.addEventListener('click', (e) => {
    e.preventDefault();

    // API key variables
    const api_key = '970c6d1962aa81ad5f1deb35d48f3007';
    const url_base = 'https://api.openweathermap.org/data/2.5'
    const input = document.getElementById('input-text');
    const url = `${url_base}/weather?q=${input.value}&appid=${api_key}&units=metric`;
    
    // Fetch data from api
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
    <span class="timezone">${d.toLocaleString('en-GB', {dateStyle:'long', timeStyle:'short'})}</span>
    <span class="temp">${Math.round(main.temp)}<sup>°C</sup></span>
    <span class="extra">Humidity: ${main.humidity}% <br> Wind Speed: ${wind.speed}mph</span>
    <span class="description">${weather[0]['description']}</span>
    <button type="button" class="remove">X</button>`;
    container.appendChild(myLi);

    // Reset input value to blank
    input.value = '';
    autofillList.innerHTML = '';
    
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

// Adding enter key functionality
document.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        add.click();
        autofillList.innerHTML = '';
    }
});
