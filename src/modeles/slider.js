import Swiper from 'swiper/bundle';

export default function slider() {
   const swiper = new Swiper('.swiper', {
      navigation: {
         nextEl: '.swiper__button-next',
         prevEl: '.swiper__button-prev',
      },
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      slidesPerView: 2,
      loop: true,
      breakpoints: {
         320: {
           slidesPerView: 1,
         },
         768: {
            slidesPerView: 2,
         },
         1240: {
            slidesPerView: 2,
         }
      }
   });
} 