

if (sw <= 960 ){
  let mobileloader = document.querySelector('.mobile-loader');
  var i = 0;
  function move() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("progress");
      let progressvalue = document.querySelector('.progress-value');
      let loaderimg = document.querySelector('.mobile-loader-logo-img');
      var width = 15;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
          loaderimg.classList.add('loaderimg-animation');
          mobileloader.classList.add('hide-loader');
        } else {
          width++;
          elem.style.width = width + "%";
          progressvalue.innerHTML = width + "%";
        }
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    move();
  } )
}
else {

  let descktoploader = document.querySelector('.desktop-loader');
  let loaderslider = document.querySelector('.loader-slider');

  var i = 0;
  function desktoploading() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("desktop-progress");
      let desktopprogressvalue = document.querySelector('.desktop-loader-counter');
      var width = 15;
      var id = setInterval(frame, 30);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
          loaderslider.classList.add('loader-slider-animation');
          descktoploader.classList.add('hide-desktop-loader');
          

        } else {
          width++;
          elem.style.width = width + "%";
          desktopprogressvalue.innerHTML = width + "%";
        }
      }
    }
  }
  let loaderslidercontent = new Swiper('.loader-slider',{
    loop: false,
    direction: 'vertical',
    slidesPerView: 1, // показывать по 3 превью
    autoplay: {
      delay: 1000,
    },  
  })
  
  document.addEventListener("DOMContentLoaded", () => {
    desktoploading();
    setTimeout(function(){
      descktoploader.classList.add('destroy-slider');
    }, 3500)
  } );
  
}