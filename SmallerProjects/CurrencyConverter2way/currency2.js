const select = document.querySelectorAll('.fromCurrency');
const number = document.getElementById('number');
const output = document.getElementById('output');

fetch('https://api.frankfurter.app/currencies')
.then(data => data.json())
.then(data => {
    display(data);
});


function display(data) {
    const entries = Object.entries(data);
    for (let i = 0; i < entries.length; i++) {
        select[0].innerHTML += `<option value="${entries[i][0]}"> ${entries[i][0]} - ${entries[i][1]} </option>`;
        select[1].innerHTML += `<option value="${entries[i][0]}"> ${entries[i][0]} - ${entries[i][1]} </option>`;
    }
}


function convert(from, to, value) {
    
}




