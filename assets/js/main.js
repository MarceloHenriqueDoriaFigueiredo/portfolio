let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    navbar.classList.toggle('active');
}

let darkmode = document.querySelector('#dark-mode');
darkmode.onclick = () =>{
    if (darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    }

    else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

// Animações usando o scroll reveal

window.sr = ScrollReveal({ duration: 1350, distance: '-250px', easing: 'ease-out'  });

sr.reveal('.home',{
    origin: 'left',
    duration: 1000
});

sr.reveal('.about',{
    origin: 'right',
    duration: 1000
});

sr.reveal('.skills', {
origin: 'top',
duration: 1000
});

sr.reveal('.portifolio', {
    origin: 'bottom',
    duration: 1000
});

sr.reveal('.contact', {
    origin: 'left',
    duration: 1000
});

sr.reveal('.footer', {
    origin: 'right',
    duration: 1000
});