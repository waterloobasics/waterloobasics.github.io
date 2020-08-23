const logo = document.querySelectorAll('#applying__svg path')

console.log(logo);

for (let i = 0; i<logo.length; i++){
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`)
}


/*Scroll Reveal*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.aif', {})

sr.reveal('#aif-sub-1', {delay:200})
sr.reveal('#aif-para-1', {delay:400})

sr.reveal('#aif-sub-2', {delay:200})
sr.reveal('#aif-para-2', {delay:400})

sr.reveal('#aif-sub-3', {delay:200})
sr.reveal('#aif-para-3', {delay:400})

sr.reveal('#aif-ol-1', {delay:500})

sr.reveal('#aif-para-3-add', {delay:600})

sr.reveal('#aif-sub-4', {delay:200})
sr.reveal('#aif-para-4', {delay:400})
sr.reveal('.aif__histo', {delay:500})

sr.reveal('#aif-sub-5', {delay:200})
sr.reveal('#aif-para-5', {delay:400})
sr.reveal('#aif-ul-1', {delay:500})

sr.reveal('#aif-sub-6', {delay:200})
sr.reveal('#aif-para-6', {delay:400})
sr.reveal('#aif-ol-2', {delay: 500})

sr.reveal('#aif-sub-7', {delay:200})
sr.reveal('#aif-para-7', {delay:400})

sr.reveal('#aif-sub-8', {delay:200})
sr.reveal('#aif-para-8', {delay:400})
sr.reveal('#aif-ul-2', {delay:500})


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

    slider.style.transform = 'translate(' + (sectionIndex) * -33.3 + '%)';
}


leftArrow.addEventListener('click', function() {
  sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
  setIndex(sectionIndex);
});

rightArrow.addEventListener('click', function() {
  sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 2;
  setIndex(sectionIndex);
});
