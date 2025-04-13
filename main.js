

window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {

    let swiper;
  
    breakpoint = window.matchMedia(breakpoint);
  
    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

    resizableSwiper(
      '(max-width: 767px)',
      '.slider-1',
      {
        loop: true,
        spaceBetween: -50,
        slidesPerView: 'auto', 
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      }

    );
});


let buttonShow = document.querySelector('.button_show');
let buttonHide = document.querySelector('.button_hide');
let wie = document.querySelectorAll('.wie');
let wie_1120px = document.querySelectorAll('.wie_1120px');


  function checkScreenSize() {
    if (window.innerWidth <= 1120) {
        buttonShow.addEventListener('click', function(evt) {
            evt.preventDefault();
            wie.forEach(item => item.classList.remove('wie__open'));
            buttonShow.classList.toggle('wie__open');
            buttonHide.classList.toggle('wie__open');
        });

        buttonHide.addEventListener('click', function() {
            wie.forEach(item => item.classList.add('wie__open'));
            buttonShow.classList.toggle('wie__open');
            buttonHide.classList.toggle('wie__open');
        });
    } 
    if (window.innerWidth >= 1120) {
      let wie = document.querySelectorAll('.wie_1120px');
      buttonShow.addEventListener('click', function(evt) {
          evt.preventDefault();
          wie.forEach(item => item.classList.remove('wie__open_1120px'));
          buttonShow.classList.toggle('wie__open_1120px');
          buttonHide.classList.toggle('wie__open_1120px');
      });

      buttonHide.addEventListener('click', function() {
          wie.forEach(item => item.classList.add('wie__open_1120px'));
          buttonShow.classList.toggle('wie__open_1120px');
          buttonHide.classList.toggle('wie__open_1120px');
      });
  } 
}

checkScreenSize();












