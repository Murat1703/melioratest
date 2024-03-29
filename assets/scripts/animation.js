/*let aparthotel = document.querySelector('.apart-hotel-pointer');
let businessCenter = document.querySelector('.business-pointer');
let complex = document.querySelector('.complex-pointer');
let aboutBlock = document.querySelector('.about');
document.addEventListener('scroll', ()=>{
    var aboutblockheight  =  aboutBlock.scrollHeight;
    console.log(aboutblockheight);
})
*/
const viewvalue = document.documentElement.clientWidth;
if (viewvalue > 960){
function animation(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
      else {change.target.classList.remove('element-show');}
    });
}
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(animation, options);
  let elements = document.querySelectorAll('.img-pointer');
  for (let elm of elements) {
    observer.observe(elm);
  }
  
let clearimg = document.querySelector('.clear-img');
let pointers = document.querySelectorAll('.img-pointer');
let renderimages = document.querySelectorAll('.mask-img');
let labels = document.querySelectorAll('.description-label');


for (let i = 0; i < pointers.length; i++) {
  pointers[i].addEventListener('mouseover', ()=>{
    renderimages[i].classList.add('show-img');
    clearimg.classList.add('hide-img');
    labels[i].classList.add('show-label');
    pointers[i].classList.add('hide-pointer');
  })
  pointers[i].addEventListener('mouseout', ()=>{
    renderimages[i].classList.remove('show-img');
    clearimg.classList.remove('hide-img');
    labels[i].classList.remove('show-label');
    pointers[i].classList.remove('hide-pointer');
  })
}

let infrabtn = document.querySelectorAll('.infra-slider-btn');
let infratxt = document.querySelectorAll('.infra-slider-open-txt');
for (let n = 0; n < infrabtn.length; n++){
  infrabtn[n].addEventListener('mouseover', () => {
    infratxt[n].classList.add('show-slide-txt')
  })
  infrabtn[n].addEventListener('mouseout', () => {
    infratxt[n].classList.remove('show-slide-txt')
  })
}
}
else {
  let mobileimgpointer = document.querySelectorAll('.mobile-img-pointer');
  let mobiledescriptiontxt = document.querySelectorAll('.about-mobile-description-block');
  let mobiledescriptionclosebtn = document.querySelectorAll('.about-mobile-description-close-btn');
  for (let i=0; i<mobileimgpointer.length; i++){
    mobileimgpointer[i].addEventListener('click', () => {
      mobileimgpointer[i].classList.add('open-mobile-description');
      mobiledescriptiontxt[i].classList.add('show-mobile-description');
      for (let n=0; n<mobileimgpointer.length; n++){
        if (i!=n){
          mobiledescriptiontxt[n].classList.remove('show-mobile-description');
        }
      }
    })
    
    mobiledescriptionclosebtn[i].addEventListener('click', () => {
      mobiledescriptiontxt[i].classList.remove('show-mobile-description');
      mobileimgpointer[i].classList.remove('open-mobile-description');

    })
  }
}