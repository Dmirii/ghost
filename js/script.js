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
})