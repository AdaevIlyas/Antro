export const reviewContent = () => {
  const items = document.querySelectorAll(".js-open-review-content");

  if (items.length) {
    items.forEach((item) => {
      const head = item.querySelector(".review-content-item__head");
      const body = item.querySelector(".review-content-item__body");

      head.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });
  }
};
