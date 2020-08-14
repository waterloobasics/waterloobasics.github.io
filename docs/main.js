const logo = document.querySelectorAll('#applying__svg path')

console.log(logo);

for (let i = 0; i<logo.length; i++){
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`)
}

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
