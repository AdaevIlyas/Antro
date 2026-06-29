import { throttle } from "../functions/throttle";

const MOBILE_MAX_WIDTH = 480;

const syncPairHeights = (left, right) => {
  const maxHeight = Math.max(left.offsetHeight, right.offsetHeight);
  left.style.height = `${maxHeight}px`;
  right.style.height = `${maxHeight}px`;
};

export const supportScenario = () => {
  const section = document.querySelector(".support-scenario");
  if (!section) return;

  const badTitle = section.querySelector(
    ".support-scenario__col_bad .support-scenario__title",
  );
  const goodTitle = section.querySelector(
    ".support-scenario__col_good .support-scenario__title",
  );
  const badItems = [
    ...section.querySelectorAll(
      ".support-scenario__col_bad .support-scenario__item",
    ),
  ];
  const goodItems = [
    ...section.querySelectorAll(
      ".support-scenario__col_good .support-scenario__item",
    ),
  ];

  if (!badItems.length || badItems.length !== goodItems.length) return;

  const pairs = [
    [badTitle, goodTitle],
    ...badItems.map((badItem, index) => [badItem, goodItems[index]]),
  ].filter(([left, right]) => left && right);

  const allElements = pairs.flat();

  const resetHeights = () => {
    allElements.forEach((element) => {
      element.style.height = "";
    });
  };

  const syncHeights = () => {
    if (window.innerWidth <= MOBILE_MAX_WIDTH) {
      resetHeights();
      return;
    }

    resetHeights();
    pairs.forEach(([left, right]) => syncPairHeights(left, right));
  };

  const syncHeightsThrottled = throttle(syncHeights);

  syncHeights();
  window.addEventListener("resize", syncHeightsThrottled);

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(syncHeightsThrottled);
    observer.observe(section);
  }

  if (document.fonts?.ready) {
    document.fonts.ready.then(syncHeights);
  }
};
