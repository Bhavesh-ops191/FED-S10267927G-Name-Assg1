const h1 = document.getElementById('text');
const img = document.querySelector('.crew');

h1.addEventListener('mouseover', function() {
    img.style.filter = 'brightness(0.5)';
});

h1.addEventListener('mouseout', function() {
    img.style.filter = 'brightness(1)';
});
