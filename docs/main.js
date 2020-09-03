

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



// Mobile Nav Submenu
const applySub = document.getElementById('applying__sublist');
const incomeSub = document.getElementById('incoming__sublist');
const applyArr = document.getElementById('app-arrow');
const incomeArr = document.getElementById('inc-arrow');

if (mq.matches){
    applyArr.addEventListener('click', ()=>{
        if (applySub.style.display === 'none'){
            applySub.style.display = 'block';
        }else{
            applySub.style.display = 'none';
        }
    });
}

if (mq.matches){
    incomeArr.addEventListener('click', ()=>{
        if (incomeSub.style.display === 'none'){
            incomeSub.style.display = 'block';
        }else{
            incomeSub.style.display = 'none';
        }
    });
}






