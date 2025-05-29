export const i_banner = () => {
  const banner = document.querySelector(".i-banner");

  if (banner) {
    document.addEventListener("scroll", function () {
      const bannerRect = banner.getBoundingClientRect();
      const isBannerOutOfView =
        bannerRect.bottom < 0 || bannerRect.top > window.innerHeight;

      if (isBannerOutOfView) {
        banner.classList.add("i-banner_scroll");
      } else {
        banner.classList.remove("i-banner_scroll");
      }
    });
  }
};
