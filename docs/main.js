const logo = document.querySelectorAll('#applying__svg path')

console.log(logo);

for (let i = 0; i<logo.length; i++){
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`)
}


/*Scroll Reveal*/



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


/* About Us page carousel */
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

var sectionIndex = 0;

function setIndex(){

    slider.style.transform = 'translate(' + (sectionIndex) * -50 + '%)';
}


leftArrow.addEventListener('click', function() {
  sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
  setIndex(sectionIndex);
});

rightArrow.addEventListener('click', function() {
  sectionIndex = (sectionIndex < 1) ? sectionIndex + 1 : 1;
  setIndex(sectionIndex);
});
