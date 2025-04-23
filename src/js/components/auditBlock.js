export const auditBlock = () => {
  const auditStart1 = document.querySelector(".js-audit-start-1");
  const auditStart2 = document.querySelector(".js-audit-start-2");
  const auditStartImg1 = document.querySelector(".js-audit-start-img-1");
  const auditStartImg2 = document.querySelector(".js-audit-start-img-2");
  const auditImgParent = auditStartImg1.parentElement;

  if (auditStart1 && auditStart2) {
    document.addEventListener("scroll", function () {
      let rect = auditStart2.getBoundingClientRect();

      if (window.innerWidth > 480) {
        if (rect.top < 500) {
          auditStart1.classList.add("audit-start__block_gray");
          auditStart2.classList.remove("audit-start__block_gray");
          auditStartImg1.style.opacity = "0";
          auditStartImg2.style.opacity = "1";
          auditImgParent.style.background = "#2780E6";
        } else {
          auditStart2.classList.add("audit-start__block_gray");
          auditStart1.classList.remove("audit-start__block_gray");
          auditStartImg1.style.opacity = "1";
          auditStartImg2.style.opacity = "0";

          auditImgParent.style.background = "#FC63D5";
        }
      }
    });
  }
};
