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

const mins = $("input.input")[0];
const secs = $("input.input")[1];

let countdown;

$("button#start-but").on('click', () => {
    let timeSeconds = (mins.value * 60) + Number(secs.value)
    displayTime(timeSeconds)
    countdown = setInterval(() => {
        timeSeconds--
        displayTime(timeSeconds)
        if (timeSeconds <= 0) {
            finishCount()
            $("h2#display").html("TIME'S UP")
            setTimeout(() => $("h2#display").html("00:00"), 3000)
        }
    }, 1000)
    
})

finishCount = () => {
    clearInterval(countdown)
}

displayTime = (second) => {
    const min = Math.floor(second / 60)
    const sec = Math.floor(second % 60)
    mins.disabled=true
    secs.disabled=true
    $("button#start-but").prop("disabled", true)

    $("h2#display").html(`${min < 10 ? '0':''}${min}:${sec < 10 ? '0':''}${sec}`)
    
    mins.value = ''
    secs.value = ''
}

$("button#cancel-but").on('click', () => {
    finishCount()
    timeSeconds = 0
    $("h2#display").html("00:00")
    mins.disabled=false
    secs.disabled=false
    $("button#start-but").prop("disabled", false)
})
