'use strict';

{
    $(function(){
        $('.nav__btn--open').on('click', function(){
            $('.nav').toggleClass('active');
        });

        $('.nav__btn--close, .nav__item a').on('click', function(){
            $('.nav').removeClass('active');
        });
    });


    // メインビジュアル：自動スライダー
    const mainSwiper = new Swiper('.main-visual__swiper',{
        loop: true,
        autoplay: {
            delay:3000,
            disableOnInteraction:false,
        },
        effect: 'fade',
    });

    // iroiro osusume：手動スライダー
    const osusumeSwiper = new Swiper('.iroiro-osusume__swiper',{
        loop: true,
        slidesPerView:1,
        navigation: {
            nextEl:'.iroiro-osusume__arrow--next',
            prevEl:'.iroiro-osusume__arrow--prev',
        },
    });


    //ページトップボタンの制御
    const pageTopBtn = document.getElementById("js-pagetop");
    window.addEventListener('scroll',
        () => {
        if (window.scrollY > 300) {
            pageTopBtn.classList.add('is-show');
        } else {
            pageTopBtn.classList.remove('is-show');
        }

        });


    // ページトップへスクロール
    pageTopBtn.addEventListener("click", 
        ()=> {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    });

}