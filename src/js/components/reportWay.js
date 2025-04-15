export const reportWay = () => {
  const track = document.querySelector(".js-way");
  const trackCircle = track.querySelector(".report-way__circle");

  const start = document.querySelector(".js-way-start");
  const finish = document.querySelector(".js-way-finish");

  init();

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
};
