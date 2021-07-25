document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector('form').onsubmit = function() {
        fetch('http://data.fixer.io/api/latest?access_key=56d56f08a108e812d9e0fc2c532d3d46')
        .then(response => response.json())
        .then(data => {
            const amount = document.getElementById('number').value;
            const curr = document.getElementById('curDropdown').value;
            const rate = data.rates[curr] * amount;
            if (amount.length == 0) {
                document.querySelector('#results').innerHTML = "Please enter an amount of money to convert."
            } else if (curr.length == 0) {
                document.querySelector('#results').innerHTML = "Please select a valid currency."
            } else {
                document.querySelector('#results').innerHTML = `${amount} EUR is ${rate.toFixed(3)} ${curr}`
            }
        });

        return false;
    }

});