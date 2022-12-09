let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    navbar.classList.toggle('active');
}

let darkmode = document.querySelector('#dark-mode');
darkmode.onclick = () =>{
    if (darkmode.classList.contains('fa-moon')){
        darkmode.classList.replace('fa-moon', 'fa-sun');
        document.body.classList.add('active');
    }

    else{
        darkmode.classList.replace('fa-sun', 'fa-moon');
        document.body.classList.remove('active');
    }
}