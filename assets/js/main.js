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

ScrollReveal().reveal('.home', { 
    delay: 500, 
    origin: 'left', 
    distance: '50px' 
});

ScrollReveal().reveal('.about', { 
    delay: 500, 
    origin: 'top', 
    distance: '50px' 
});

ScrollReveal().reveal('.skills', { 
    delay: 500, 
    origin: 'left', 
    distance: '50px' 
});

ScrollReveal().reveal('.portifolio', { 
    delay: 500, 
    origin: 'top', 
    distance: '50px' 
});

ScrollReveal().reveal('.contact', { 
    delay: 500, 
    origin: 'left', 
    distance: '50px' 
});