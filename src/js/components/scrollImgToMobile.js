export default function scrollImgToMibile() {
  const img = document.querySelector(".development-green__statistics-img");
  const container = img.parentElement;

  if (!img) return;

  function toggleMobileWrap() {
    if (window.innerWidth <= 480) {
      if (!container.classList.contains("mobile-wrapped")) {
        const wrapper = document.createElement("div");
        wrapper.className = "mobile-img-wrapper";

        // Заменяем img на wrapper с img внутри
        container.replaceChild(wrapper, img);
        wrapper.appendChild(img);
        container.classList.add("mobile-wrapped");
      }
    } else {
      if (container.classList.contains("mobile-wrapped")) {
        const wrapper = container.querySelector(".mobile-img-wrapper");
        if (wrapper) {
          // Возвращаем img на место
          container.replaceChild(img, wrapper);
          container.classList.remove("mobile-wrapped");
        }
      }
    }
  }

  // Запускаем сразу и при ресайзе
  toggleMobileWrap();
  window.addEventListener("resize", toggleMobileWrap);
}
