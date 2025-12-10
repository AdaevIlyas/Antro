import Swiper from "swiper/bundle";

export const swipers = () => {
  const caseSwiper = new Swiper(".js-case-swiper", {
    slidesPerView: "auto",
    /* autoplay: {
            delay: 10000,
            disableOnInteraction: true
        }, */
    navigation: {
      prevEl: ".main-cases__swiper-prev",
      nextEl: ".main-cases__swiper-next",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const mainCasesSwiper = new Swiper(".js-main-cases-swiper", {
    slidesPerView: "auto",
    /* autoplay: {
            delay: 10000,
            disableOnInteraction: true
        }, */
    navigation: {
      prevEl: ".main-cases__swiper-prev",
      nextEl: ".main-cases__swiper-next",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const mainCasesmobileSwiper = new Swiper(".js-main-cases-mobile-swiper", {
    slidesPerView: "auto",
    /* autoplay: {
            delay: 10000,
            disableOnInteraction: true
        }, */
    /* navigation: {
            prevEl: ".main-cases__swiper-prev",
            nextEl: ".main-cases__swiper-next",
        }, */
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const mainExperienceSwiper = new Swiper(".js-main-experience-swiper", {
    enable: true,
    slidesPerView: "auto",
    /* autoplay: {
            delay: 10000,
            disableOnInteraction: true
        }, */
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      480: {
        enable: false,
      },
    },
  });

  const mainSolutionsSwiper = new Swiper(".js-main-solutions-swiper", {
    enable: true,
    slidesPerView: "auto",
    /* autoplay: {
            delay: 10000,
            disableOnInteraction: true
        }, */
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      480: {
        enable: false,
      },
    },
  });

  const mainMediaSwiper = new Swiper(".js-main-media-swiper", {
    enable: true,
    slidesPerView: "auto",
    /* autoplay: {
            delay: 10000,
            disableOnInteraction: true
        }, */
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      480: {
        enable: false,
      },
    },
  });

  const tariffsSwiper = new Swiper(".js-audit-tariffs-swiper", {
    enable: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    /* autoplay: {
            delay: 10000,
            disableOnInteraction: true
        }, */
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      480: {
        enable: false,
      },
    },
  });
};
