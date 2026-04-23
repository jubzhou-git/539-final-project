const dropdown = document.querySelector('.dropdown');
const menu = dropdown.querySelector('.dropdown-menu');
const toggle = dropdown.querySelector('.dropdown-toggle');

dropdown.addEventListener('mouseenter', function () {
    menu.classList.add('open');
});

dropdown.addEventListener('mouseleave', function () {
    menu.classList.remove('open');
});

menu.addEventListener('mouseenter', function () {
    menu.classList.add('open');
});

menu.addEventListener('mouseleave', function () {
    menu.classList.remove('open');
});

toggle.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.toggle('open');
});