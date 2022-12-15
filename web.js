let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}


//DarkMode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('fa-moon-o')) {
        darkmode.classList.replace('fa-moon-o', 'fa-sun-o');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('fa-sun-o', 'fa-moon-o');
        document.body.classList.remove('active');
    }
}