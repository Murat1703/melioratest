let menubtn = document.querySelector('.menu-btn');
let modaldesktop = document.querySelector('.modal-desktop');
let modalclosebtn = document.querySelector('.modal-desktop-close-btn');
menubtn.addEventListener('click', ()=> {
    modaldesktop.classList.add('modal-desktop-show');
})
modalclosebtn.addEventListener('click', () => {
    modaldesktop.classList.remove('modal-desktop-show');
})
let modallinklist = document.querySelectorAll('.modal-desktop-center-link');
for (let i=0; i<modallinklist.length; i++){
    modallinklist[i].addEventListener('click', () =>{
        modaldesktop.classList.remove('modal-desktop-show');
    })
}

let mobilemenubtn = document.querySelector('.menu-mobile-btn');
let mobilemenucontent = document.querySelector('.mobile-menu-open');
let closemobilemenubtn = document.querySelector('.mobile-menu-close');
let linkmobilemenu = document.querySelectorAll('.mobile-menu-open-link');
mobilemenubtn.addEventListener('click', () => {
    mobilemenucontent.classList.add('show-mobile-menu');
});
closemobilemenubtn.addEventListener('click', () => {
    mobilemenucontent.classList.remove('show-mobile-menu');
});
for(let j=0; j<linkmobilemenu.length; j++){
    linkmobilemenu[j].addEventListener('click', () => {
        mobilemenucontent.classList.remove('show-mobile-menu');
    })
}

let mobilemodalbtn = document.querySelectorAll('.mobile-modal-btn');
let closemobilemodalbtn = document.querySelector('.close-mobile-modal');
let mobilemodalwindow = document.querySelector('.mobile-modal-phone-call')
for (let i=0; i < mobilemodalbtn.length; i++){
    mobilemodalbtn[i].addEventListener('click', () => {
        mobilemodalwindow.classList.add('show-mobile-modal');
    })
}
closemobilemodalbtn.addEventListener('click', () => {
    mobilemodalwindow.classList.remove('show-mobile-modal');
})

let modalcallbtn = document.querySelectorAll('.modal-call-btn');
let modalcallclosebtn = document.querySelector('.modal-call-desktop-close-btn');
let modalcallcontent = document.querySelector('.modal-call-desktop');
for (let i=0; i<modalcallbtn.length; i++ ){
    modalcallbtn[i].addEventListener('click', () => {
        modalcallcontent.classList.add('modal-call-desktop-show');
    })
    
}
modalcallclosebtn.addEventListener('click', () =>{
    modalcallcontent.classList.remove('modal-call-desktop-show');
})