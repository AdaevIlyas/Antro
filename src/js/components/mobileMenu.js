export const mobileMenu = () => {
  const slide = document.querySelector(".js-mobile-menu");
  const burger = document.querySelector(".js-burger");
  const menuBlack = document.querySelector(".mobile-menu__black");
  const root = document.querySelector(".mobile-menu");

  if (!slide || !burger) return;

  const setOpen = (open) => {
    document
      .querySelector(".mobile-menu__black")
      ?.classList.toggle("mobile-menu__black_show", open);
    burger.classList.toggle("mobile-menu__burger_open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    slide.classList.toggle("mobile-menu__slide_open", open);

    const burgerText = burger.querySelector(".mobile-menu__burger-text");
    if (burgerText) {
      burgerText.innerText = open ? "Закрыть" : "Меню";
    }
  };

  const isOpen = () => burger.classList.contains("mobile-menu__burger_open");

  burger.addEventListener("click", function (event) {
    event.preventDefault();
    setOpen(!isOpen());
  });

  if (menuBlack) {
    menuBlack.addEventListener("mousedown", function (e) {
      if (e.target.classList.contains("mobile-menu__black_show")) {
        setOpen(false);
      }
    });
  }

  // bench: close on in-menu nav / CTA
  root?.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
};
