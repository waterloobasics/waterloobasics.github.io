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



