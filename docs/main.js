

/* Mobile Nav */

/* --Media Query-- */

const mq = window.matchMedia(" (max-width: 820px) ")

/* --Nav Toggling-- */
const hamburger = document.getElementById('hamburger');
const header = document.getElementById('header');
const nav = document.getElementById('nav-icon');
const x = document.getElementById('nav-icon-x')


if (mq.matches) {
    hamburger.addEventListener('click', () =>{
        if (header.style.display === 'none'){
            header.style.display ='block';
            nav.style.display = 'none';
            x.style.display = 'block';
        }else{
            header.style.display = 'none';
            nav.style.display = 'block';
            x.style.display = 'none';
        }
    });
}else{
    header.style.display = 'block';
    nav.style.display = 'none';
    x.style.display = 'none';
}




/* Changing hamburger nav to x */



