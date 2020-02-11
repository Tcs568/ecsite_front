'use strict'
document.addEventListener('DOMContentLoaded', () => {
    const PageLoad = () => {
        const bg = document.querySelector('.js-loaderBg');
        const loader = document.querySelector('.js-loader');
        bg.classList.remove('IsActive');
        loader.classList.remove('IsActive');

        const stopload = () => {
            if (document.querySelector('.TopLoader')) {
                bg.classList.add('Fadeout-TopBg');
                loader.classList.add('Fadeout-TopLoader');
            } else {
                bg.classList.add('Fadeout-SubBg');
                loader.classList.add('Fadeout-SubLoader');
            };
        }

        window.addEventListener('load', stopload);
        setTimeout('stopload()', 10000);
    }
    PageLoad();

    const navOpen = () => {
        const toggler = document.querySelector('.js-navTrigger');
        const menu = document.querySelector('.js-navList');
        toggler.addEventListener('click', () => {
            menu.classList.toggle('Active');
            toggler.classList.toggle('Open');
        });
    }
    navOpen();

    $(function () {
        $('#js-visualSlider').slick(
            {
                arrows: false,
                autoplay: true,
                autoplaySpeed: 500,
                speed: 4000,
                fade: true,
            });
        $('#js-productSlider').slick({
            asNavFor: '#js-thumbnail_productSlider',
            arrows: false,
            infinite: true,
            draggable: false,
        });
        $('#js-thumbnail_productSlider').slick({
            asNavFor: '#js-productSlider',
            infinite: true,
            focusOnSelect: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: true,
        });
    });

    const swiper = new Swiper('.swiper-container', {
        loop: true,
        loopedSlides: 5,
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

});