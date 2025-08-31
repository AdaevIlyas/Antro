export const cookie_and_banner = () => {
  const cookie = document.querySelector(".cookie");
  const banner = document.querySelector(".i-banner");
  const cookieAgreeBtn = document.querySelector(".cookie__agree");
  const bannerCloseBtn = document.querySelector(".i-banner__close");

  // Флаги состояния
  let isCookieClosed = false;
  let isBannerClosed = false;
  let isMobileView = window.innerWidth <= 480;

  // Основная функция проверки скролла
  function checkScroll() {
    // Логика для cookie
    if (
      cookie &&
      !isCookieClosed &&
      !cookie.classList.contains("cookie_none")
    ) {
      cookie.classList.toggle("cookie_scroll", window.pageYOffset > 0);
    }

    // Логика для banner (только если не мобилка или cookie закрыт)
    if (
      banner &&
      !isBannerClosed &&
      !banner.classList.contains("i-banner_none")
    ) {
      const shouldHandleBanner =
        !isMobileView ||
        (isMobileView &&
          (isCookieClosed || cookie.classList.contains("cookie_none")));

      if (shouldHandleBanner) {
        const isBannerHiddenAbove = banner.getBoundingClientRect().bottom < 0;
        banner.classList.toggle("i-banner_scroll", isBannerHiddenAbove);
        if (cookie)
          cookie.classList.toggle("cookie_scroll-top", isBannerHiddenAbove);
      } else {
        banner.classList.remove("i-banner_scroll");
        if (cookie) cookie.classList.remove("cookie_scroll-top");
      }
    }
  }

  // Функция для обработки ресайза
  function handleResize() {
    const newIsMobile = window.innerWidth <= 480;
    if (newIsMobile !== isMobileView) {
      isMobileView = newIsMobile;
      checkScroll(); // Перепроверяем состояние при изменении размера
    }
  }

  // Инициализация
  if (cookie || banner) {
    checkScroll();
    document.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", handleResize);
  }

  // Обработчик для кнопки cookie
  if (cookieAgreeBtn && cookie) {
    cookieAgreeBtn.addEventListener("click", () => {
      cookie.classList.add("cookie_none");
      isCookieClosed = true;
      checkScroll(); // Обновляем состояние после закрытия cookie
    });
  }

  // Обработчик для кнопки banner
  if (bannerCloseBtn && banner) {
    bannerCloseBtn.addEventListener("click", () => {
      banner.classList.add("i-banner_none");
      banner.classList.remove("i-banner_scroll");
      if (cookie) cookie.classList.remove("cookie_scroll-top");
      isBannerClosed = true;

      // Обновляем обработчики событий
      document.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", handleResize);

      // Новый обработчик только для cookie
      document.addEventListener("scroll", () => {
        if (
          cookie &&
          !isCookieClosed &&
          !cookie.classList.contains("cookie_none")
        ) {
          cookie.classList.toggle("cookie_scroll", window.pageYOffset > 0);
        }
      });
    });
  }

  // Чистка при демонтаже (если нужно)
  return () => {
    document.removeEventListener("scroll", checkScroll);
    window.removeEventListener("resize", handleResize);
  };
};
