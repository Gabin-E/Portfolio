const hideNavButton = document.getElementById('hide-nav-button');
const showNavButton = document.getElementById('show-nav-button');
const sideNav = document.getElementById('sideNav');

hideNavButton.addEventListener('click', function() {
    sideNav.classList.add('side-nav-collapsed');
    showNavButton.style.display = 'block';
});

showNavButton.addEventListener('click', function() {
    sideNav.classList.remove('side-nav-collapsed');
    showNavButton.style.display = 'none';
});