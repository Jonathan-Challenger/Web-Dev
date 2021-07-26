const select = document.querySelectorAll('.fromCurrency');
const number = document.getElementById('number');
const output = document.getElementById('output');
const convertBut = document.querySelector('[data-convert]');


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
    const root = "https://api.frankfurter.app";

    fetch(`${root}/latest?amount=${value}&from=${from}&to=${to}`)
        .then(response => response.json())
        .then(val => {
            output.value = Object.values(val.rates)[0];
    });
}

function clicked() {
    let inCur = select[0].value;
    let outCur = select[1].value;

    let val = number.value;

    if (inCur != outCur && val.length > 0) {
        convert(inCur, outCur, val);
    } else {
        alert("Please choose two different currencies and enter an amount to convert.")
    }
}


document.addEventListener('keyup', function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        
        convertBut.click();
    }
});

function swap() {
    let inCur = select[0].value;
    let outCur = select[1].value;

    select[0].value = outCur;
    select[1].value = inCur;
}








