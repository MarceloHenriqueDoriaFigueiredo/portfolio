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

// Animação scroll reveal

ScrollReveal().reveal('.animation', { 
    delay: 500,
    duration: 2500, 
    origin: 'left', 
    distance: '60px' 
});

ScrollReveal().reveal('.home', { 
    delay: 50,
    duration: 2500, 
    origin: 'left', 
    distance: '60px' 
});

ScrollReveal().reveal('.about-img', { 
    delay: 50,
    duration: 2500, 
    origin: 'bottom', 
    distance: '60px' 
});

ScrollReveal().reveal('.about-text', { 
    delay: 50,
    duration: 2500, 
    origin: 'top', 
    distance: '60px' 
});

ScrollReveal().reveal('.bars', { 
    delay: 500,
    duration: 2500, 
    origin: 'top', 
    distance: '60px' 
});

ScrollReveal().reveal('.skills-img', { 
    delay: 500, 
    origin: 'bottom', 
    distance: '60px' 
});

ScrollReveal().reveal('.portifolio', { 
    delay: 500, 
    duration: 2500, 
    origin: 'top', 
    distance: '60px' 
});

ScrollReveal().reveal('.contact', { 
    delay: 500, 
    duration: 2500, 
    origin: 'left', 
    distance: '60px' 
});

ScrollReveal().reveal('.footer-social a i', { 
    delay: 500, 
    duration: 2500, 
    origin: 'left', 
    distance: '60px',
    interval: 200
});