// Assigning variables
const listbody = document.getElementById("list-box");
const activity = document.getElementById("input-form");
const listDiv = document.getElementById("list-box");
const date = document.getElementById("date");
const addBut = document.getElementById("add-button");

// Finding and formatting the current Date
n = new Date();
day = n.getDay();
dayNum = n.getDate();
month = n.getMonth();

days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
daysObj = {}
for (let i = 1; i < 8; i++) {
    daysObj[i] = days[i - 1];
}

months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
monthsObj = {}
for (let i = 1; i < 13; i++) {
    monthsObj[i] = months[i - 1];
}

// Adding date to relevant p tag
date.innerText = `${daysObj[day]}, ${dayNum} ${monthsObj[month]}`;


// Function that adds new task on each click
function add() {
    if (activity.value === "") {
        alert("Please enter an activity to add.")
    } else {
        listbody.innerHTML += `<div class="list-element">
            <span>${activity.value}</span>
            <button class="remove-button" type="button">x</button>
            </div>`
        activity.value = "";
    }
}

// Removes the task when cross is clicked
listDiv.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const button = e.target;
        const par = button.parentNode;
        const gpar = par.parentNode;
        if (button.textContent === "x") {
            gpar.removeChild(par);
        }
    }
});

document.addEventListener('keyup', function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        
        addBut.click();
    }
});
