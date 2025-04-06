export const dataSwap = () => {
  const boxs = document.querySelectorAll(".js-swap-from-wrapper");

  boxs.forEach((box) => {
    const swaps = box.querySelectorAll(".js-swap-form");
    const elems = box.querySelectorAll("[data-swap-from]");
    elems.forEach((elem) => {
      elem.style.display = "none";
    });

    elems[0].style.display = "";

    swaps.forEach((swap) => {
      swap.addEventListener("click", () => {
        elems.forEach((elem) => {
          elem.style.display = "none";
        });

        box.querySelector(
          `[data-swap-from="${swap.dataset.swapTo}"]`
        ).style.display = "";
      });
    });

    if (box.classList.contains("modal__review-wrapper")) {
      const globalSwaps = document.querySelectorAll(
        ".js-swap-form[data-swap-to-global]"
      );

      globalSwaps.forEach((swap) => {
        swap.addEventListener("click", () => {
          elems.forEach((elem) => {
            elem.style.display = "none";
          });

          console.log(box);
          console.log(swap.dataset.swapTo);
          box.querySelector(
            `[data-swap-from="${swap.dataset.swapTo}"]`
          ).style.display = "";
        });
      });
    }
  });
};
