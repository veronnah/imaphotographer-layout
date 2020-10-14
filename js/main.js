let nav = document.getElementById('nav');
let title = document.getElementById('intro__heading_block_up');

window.addEventListener('scroll', e =>{
    let value = 1 + window.scrollY / -350 ;
    title.style.opacity = value;

    if(window.pageYOffset > 50){
        nav.classList.add('nav__scroll');
    }
    else if(window.pageYOffset >= 0 && nav.classList.contains('nav__scroll')){
        nav.classList.remove('nav__scroll');
    } 
   
});

