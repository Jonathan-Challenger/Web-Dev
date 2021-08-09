const card = document.querySelector('.card-inner');

card.addEventListener('click', function(e) {
    card.classList.toggle('is-flipped');
})