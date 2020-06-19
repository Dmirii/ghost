$(document).ready( () =>{
    var mMenuBurer = $('.header__burger');
    var mMenu =$('.header__m-menu');
    var hMenu = $('.header__menu');
    var sInput = $('.header__search');
    var reg = $('.header__register');
    var senter = $('.header__enter');


    mMenuBurer.on('click', () =>{
        mMenu.toggleClass('active');
        hMenu.toggleClass('active');
        sInput.toggleClass('active');
        reg.toggleClass('active');
        senter.toggleClass('active');

        $('body').toggleClass('no-scroll');

    })
    // carusel
    var mySwiper = new Swiper ('.swiper-container', {
     
        
        slidesPerView:4,
       
        spaceBetween: 25,
        loop: true,
        breakpoints:{
            992:{slidesPerView:4},
            768:{slidesPerView:2},
            320:{slidesPerView:1,
                navigation:{
                    nextEl:'.footer__img',
                }}
           
        }
      })
})