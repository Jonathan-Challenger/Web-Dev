const listbody = document.getElementById("list-box");
const activity = document.getElementById("input-form");
const listDiv = document.getElementById("list-box");


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
