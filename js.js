// icone barra
let menuicone = document.querySelector('#menu-icone');
let barra = document.querySelector('.barra');

menuicone.onclick = () => {
    menuicone.classList.toggle('bx-x');
    barra.classList.toggle('presente');
}


// ativar link - essa ta dando erro - analisar novamente
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header barra a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        
        /* if(top >= offset && top < offset + height ) {
            navlinks.forEach(links => {
                links.classList.remove('presente');
                document.querySelector('header barra a[href*=' + id + ']').classList.add('presente');
            });
        }; */
    }); 

    // LINKS
    let header = document.querySelector('header');

    header.classList.toggle('s', window.scrollY > 100);

    // remove icones

    menuicone.classList.remove('bx-x');
    barra.classList.remove('presente');
}; 

    //ecrã
    ScrollReveal ({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.conteudo, .apolonia', {origin: 'top' });
    ScrollReveal().reveal('.foto, .caixa-projetos, .contato form', {origin: 'bottom' });
    ScrollReveal().reveal('.conteudo p, .sobre-conteudo', {origin: 'right' });