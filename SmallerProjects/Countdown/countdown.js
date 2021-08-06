/* 
THIS IS THE CODE IN PLAIN JAVASCRIPT WHICH PERFORMS THE SAME FUNCTION AS BELOW

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
*/

$("button#start-but").on('click', () => {
    if ($("input.input")[0].value == '' && $("input.input")[1].value == '') {
        alert("Please enter a time to count down from!")
    } else {
        $("h2#display").html(`${mins.value}:${secs.value}`)
    }
})
