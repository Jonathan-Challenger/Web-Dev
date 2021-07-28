const listbody = document.getElementById("list-box");
const activity = document.getElementById("input-form");
const removeBut = document.getElementsByClassName("remove-button");


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

function remove() {

}

console.log(removeBut);
console.log(removeBut[0].parentNode.parentNode);