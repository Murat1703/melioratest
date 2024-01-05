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

