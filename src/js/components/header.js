export const header = () => {
  const header = document.querySelector(".header");

  if (header) {
    const mobileMenu = document.querySelector(".mobile-menu");
    const modals = document.querySelectorAll(".modal[data-scroll]");
    const logos = document.querySelectorAll(".js-header-logo");

    if (window.innerWidth > 480) {
      header_scroll();
    } else {
      header_mobile_scroll();
    }

    document.addEventListener("scroll", function () {
      if (window.innerWidth > 480) {
        header_scroll();
      } else {
        header_mobile_scroll();
      }
    });

    function header_scroll() {
      if (window.pageYOffset > 0 && header) {
        header.classList.add("header_scroll");
        for (let modal of modals ) {
          modal.classList.add("modal_scroll");
        }
      } else {
        header.classList.remove("header_scroll");
        for (let modal of modals ) {
          modal.classList.remove("modal_scroll");
        }
      }
    }

    function header_mobile_scroll() {
      if (window.pageYOffset > 0 && mobileMenu) {
        mobileMenu?.classList.add("mobile-menu_show");
      } else {
        mobileMenu?.classList.remove("mobile-menu_show");
      }
    }

    if (
      location.pathname == "" ||
      location.pathname == "/" ||
      location.pathname == "/works/antro/"
    ) {
      if (logos.length) {
        for (let logo of logos) {
          logo.classList.add("header__logo_nolink");
        }
      }
    }
  }
};
