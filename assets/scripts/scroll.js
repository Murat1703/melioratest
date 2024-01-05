
SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime    : 800,
    // Размер шага в пикселях 
    stepSize         : 75,
    // Дополнительные настройки:
        // Ускорение 
    accelerationDelta : 30,  
    // Максимальное ускорение
    accelerationMax   : 2,   
    // Поддержка клавиатуры
    keyboardSupport   : true,  
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll       : 50,
    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,
    // Поддержка тачпада
    touchpadSupport   : true,
})
// собираем все якоря; устанавливаем время анимации и количество кадров


      var $page = $('html, body');
      $('a[href*="#"]').click(function() {
          $page.animate({
              scrollTop: $($.attr(this, 'href')).offset().top
          }, 4500);
          return false;
      });
      