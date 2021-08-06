const mins = document.querySelectorAll('.input')[0];
const secs = document.querySelectorAll('.input')[1];
const start = document.getElementById('start-but');
const display = document.getElementById('display');

start.addEventListener('click', () => {
    if (mins.value == '' && secs.value == '') {
        alert("Please enter a time to count down from!")
    } else {
        display.innerHTML = `${mins.value}:${secs.value}`
    }
})

