<<<<<<< Updated upstream:assets/main.js
const logo = document.querySelectorAll('#anim__heading path')
=======
const incoming__svg = document.querySelectorAll('#incoming__svg path')
>>>>>>> Stashed changes:docs/main.js

for (let i = 0; i<incoming__svg.length; i++){
    console.log(`letter ${i} is ${incoming__svg[i].getTotalLength()}`)
}