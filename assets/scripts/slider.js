const sw = document.documentElement.clientWidth;
console.log(sw);
if (sw >= 960){
var swiper = new Swiper('.architecture-slider-content', {
    // Optional parameters
  loop: true,
  slidesPerView: 3, // показывать по 3 превью
	spaceBetween: 32, // расстояние между слайдами
    // Navigation arrows
  navigation: {
    nextEl: '.architecture-next',
    prevEl: '.architecture-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.3,
      spaceBetween: 20,
      centeredSlides: true,
      pagination: {
        el: ".architecture-slide-pagination",
        clickable: true,
      },

    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.3,
      spaceBetween: 20,
      centeredSlides: true,
      pagination: {
        el: ".architecture-slide-pagination",
        clickable: true,
      },

    },
  }
});

var lobbyslider = new Swiper('.lobby-slides-list', {
    // Optional parameters
    loop: true,
    slidesPerView: 1, // показывать по 3 превью
	  spaceBetween: 32, // расстояние между слайдами
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    pagination: {
      el: ".lobby-slider-counter",
      type: "custom",
      renderCustom: function(swiper, current, total){
        return (current + '').padStart(2, "0") + ' / ' + (total + '').padStart(2, "0");
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.lobby-slider-next',
      prevEl: '.lobby-slider-prev',
    },
  
});
  
const placesslider = new Swiper('.tab-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1, 
    // Navigation arrows
    //pagination: {
    //  el: ".tab-content-slider-counter",
    //  type: "custom",
    //  renderCustom: function (placesslider, current, total) {
    //    return current + ' of ' + total;
    //  }  
  //  },
    navigation: {
      nextEl: '.tab-content-next-btn',
      prevEl: '.tab-content-prev-btn',
    },
});

let totalSlide = document.querySelector('.tab-content-total');
let tabcurrentSlide = document.querySelector('.tab-content-current')
let currentSlide = ++placesslider.realIndex;
if (currentSlide<10){
  tabcurrentSlide.innerHTML = '0'+currentSlide;
}
if (placesslider.slides.length<10){
  totalSlide.innerHTML = '0'+placesslider.slides.length;
}
console.log(placesslider);
placesslider.on('slideChange',  function() {
  let currentSlide = ++placesslider.realIndex;
  if (currentSlide<10){
    tabcurrentSlide.innerHTML = '0'+currentSlide;
  }
});


const placesNameSlider = new Swiper('.places-name-slider', {
  loop: true,
  slidesPerView: 1, 
  direction: 'vertical',
})

const timeSlider = new Swiper('.time-slider', {
  loop: true,
  slidesPerView: 1, 
  direction: 'vertical',
})


placesslider.controller.control = placesNameSlider;
placesNameSlider.controller.control = placesslider;

placesslider.controller.control = timeSlider;
timeSlider.controller.control = placesslider;

placesNameSlider.controller.control = timeSlider;
timeSlider.controller.control = placesNameSlider;
const CultureSlider = new Swiper('.culture-slider', {
  loop: true,
  slidesPerView: 1, 
  navigation: {
    nextEl: '.tab-content-next-btn',
    prevEl: '.tab-content-prev-btn',
  },

})

const infraslider = new Swiper('.infra-slider', {
  loop: true,
  slidesPerView: 3.2,
  spaceBetween: 32,
  navigation: {
      nextEl: ".territory-slider-next",
      prevEl: ".territory-slider-prev",
  },   
});

const apartmentsslider = new Swiper('.apartments-slider', {
  loop: true,
  slidesPerView: 2.3,
  spaceBetween: 40,
  navigation: {
      nextEl: ".territory-slider-next",
      prevEl: ".territory-slider-prev",
  },   
});

const constrslider = new Swiper('.construction-tab-slider', {
  loop: true,
  slidesPerView: 3.2,
  spaceBetween: 40,
});

const projectssslider = new Swiper('.projects-slider-content', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".projects-counter",
    type: "customCount",
    renderCustom: function(swiper, current, total){
      return (current + '').padStart(2, "0") + ' / ' + (total + '').padStart(2, "0");
    }
  },
  navigation: {
    nextEl: ".projects-next-btn",
    prevEl: ".projects-prev-btn",
  },  
});


const projectstitleslider = new Swiper('.project-main-title-slider', {
  loop: true,
  direction: 'vertical',
  slidesPerView: 1,
  navigation: {
    nextEl: ".projects-next-btn",
    prevEl: ".projects-prev-btn",
  },  
});

projectssslider.controller.control = projectstitleslider;
projectstitleslider.controller.control = projectssslider;


const territoryslider2 = new Swiper('.territory-slider-list',{
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".territory-tab-content-next-btn",
    prevEl: ".territory-tab-content-prev-btn",
  },  
});

let territorytotalSlide = document.querySelector('.counter-count');
let territorycurrentSlide = document.querySelector('.counter-current-slide')
let tempcurrentSlide = ++territoryslider2.realIndex;
if (tempcurrentSlide<10){
  territorycurrentSlide.innerHTML = '0'+tempcurrentSlide;
}
if (territoryslider2.length<10){
  territorytotalSlide.innerHTML = ' / 0'+territoryslider2.length;
}
console.log(territoryslider2);
}
else {
  let architecturemobileslider = new Swiper('.architecture-mobile-slider-content', {
    // Optional parameters
  loop: true,
  pagination: {
    el: '.architecture-mobile-slider-pagination', 
    clickable: true,
  },
  centeredSlides: true,
  slidesPerView: 1.3, // показывать по 3 превью
	spaceBetween: 8, // расстояние между слайдами
    // Navigation arrows
  });

  let lobbymobileslider = new Swiper('.lobby-mobile-slider-content', {
    // Optional parameters
  loop: true,
  pagination: {
    el: '.lobby-mobile-pagination', 
    clickable: true,
  },
  centeredSlides: true,
  slidesPerView: 1.3, // показывать по 3 превью
	spaceBetween: 8, // расстояние между слайдами
    // Navigation arrows
  });

  let placesmobileslider = new Swiper('.places-mobile-slider-content',{
    loop: true,
    slidesPerView: 1, // показывать по 3 превью
    navigation: {
      nextEl: ".places-mobile-slider-next-btn",
      prevEl: ".places-mobile-slider-prev-btn",
    },  
  });

  let placesmobiletimeslider = new Swiper('.places-mobile-slider-slider', {
    loop: true,
    slidesPerView: 1,
    direction: 'vertical',
    navigation: {
      nextEl: ".places-mobile-slider-next-btn",
      prevEl: ".places-mobile-slider-prev-btn",
    },  
  });

  let placesmobilenameslider = new Swiper('.places-mobile-places-name-slider',{
    loop: true,
    slidesPerView: 1, 
    direction: 'vertical',
    navigation: {
      nextEl: ".places-mobile-slider-next-btn",
      prevEl: ".places-mobile-slider-prev-btn",
    },  
  });

  let inframobileslider = new Swiper('.infra-mobile-slider-content',{
    loop: true,
    slidesPerView: 1.2, 
    spaceBetween: 12,
  });

  let territorymobileslider = new Swiper('.infra-mobile-content-slider-content', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".infra-mobile-content-next-btn",
      prevEl: ".infra-mobile-content-prev-btn",
    },  
  });
  
  let apartmentsmobileslider = new Swiper('.apartments-mobile-slider-content', {
    loop: true,
    slidesPerView: 1.1, 
    spaceBetween: 12,
  });

  const adconstructionmobileslider = new Swiper('.construction-mobile-slider-block-content', {
    loop: true,
    slidesPerView: 1.1, 
    spaceBetween: 12,
  })

  const projectsmobileslider = new Swiper('.projects-mobile-slider-content', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".projects-mobile-slider-next-btn",
      prevEl: ".projects-mobile-slider-prev-btn",
    },  
  })

  const placesnamemobileslider = new Swiper('.mobile-regular-projects-title-slider', {
    loop: true,
    slidesPerView: 1,
    direction: 'vertical',
    navigation: {
      nextEl: ".projects-mobile-slider-next-btn",
      prevEl: ".projects-mobile-slider-prev-btn",
    },  
  })
  projectsmobileslider.controller.control = placesnamemobileslider;
  placesnamemobileslider.controller.control = projectsmobileslider;
  


}