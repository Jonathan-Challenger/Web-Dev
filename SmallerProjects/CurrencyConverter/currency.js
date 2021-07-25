document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector('form').onsubmit = function() {
        fetch('http://data.fixer.io/api/latest?access_key=56d56f08a108e812d9e0fc2c532d3d46')
        .then(response => response.json())
        .then(data => {
            const curr = document.getElementById('curDropdown').value;
            console.log(data.rates[curr]);
        });

        return false;
    }



});