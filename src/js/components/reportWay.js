export const reportWay = () => {
  const trackWrap = document.querySelectorAll(".report-track");

  trackWrap.forEach((wrap) => {
    const track = wrap.querySelector(".js-way");
    const trackCircle = track.querySelector(".report-way__circle");

    const start = wrap.querySelector(".js-way-start");
    const finish = wrap.querySelector(".js-way-finish");

    init();

    window.addEventListener("resize", init);

    function init() {
      const trackCircleRect = trackCircle.getBoundingClientRect();
      const trackCircleHeight = trackCircleRect.height / 2;
      const startRect = start.getBoundingClientRect();
      const finishRect = finish.getBoundingClientRect();

      let distance = finishRect.bottom - startRect.top;

      const pointCenterStart = startRect.height / 2;
      const pointCenterFinish = finishRect.height / 2;

      distance =
        distance -
        pointCenterStart -
        pointCenterFinish +
        trackCircleHeight +
        trackCircleHeight;

      track.style.top = `${pointCenterStart - trackCircleHeight}px`;
      track.style.height = `${distance}px`;
    }
  });
};
