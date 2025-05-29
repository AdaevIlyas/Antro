export const cookie = () => {
  const cookie = document.querySelector(".cookie");

  if (cookie) {
    cookie_scroll();

    document.addEventListener("scroll", function () {
      cookie_scroll();
    });

    function cookie_scroll() {
      if (window.pageYOffset > 0 && cookie) {
        cookie?.classList.add("cookie_scroll");
      } else {
        cookie?.classList.remove("cookie_scroll");
      }
    }
  }
};
