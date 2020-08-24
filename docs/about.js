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