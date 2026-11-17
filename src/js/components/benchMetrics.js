export const benchMetrics = () => {
  const root = document.querySelector(".js-bench-metrics");
  if (!root) return;

  const tabs = [...root.querySelectorAll(".js-bench-metrics-tab")];
  const panels = [...root.querySelectorAll(".js-bench-metrics-panel")];
  const panelsWrap = root.querySelector(".bench-metrics__panels");
  if (!tabs.length || !panels.length || !panelsWrap) return;

  const mq = window.matchMedia("(max-width: 480px)");
  let mobileMode = null;

  const getPanel = (id) =>
    panels.find((panel) => String(panel.dataset.id) === String(id));

  const syncTabChrome = (tab, on) => {
    tab.classList.toggle("bench-metrics__card_active", on);
    tab.classList.toggle("is-active", on);
    tab.setAttribute("aria-selected", on ? "true" : "false");
    tab.tabIndex = on ? 0 : -1;

    const goImg = tab.querySelector(".bench-metrics__card-go img");
    if (!goImg) return;
    goImg.src = on ? "img/bench/arrow-white.svg" : "img/bench/arrow-dark.svg";
  };

  const setActive = (id, { allowToggle = false } = {}) => {
    const key = String(id);
    const isMobile = mq.matches;
    const current = tabs.find((tab) => tab.classList.contains("is-active"));
    const same = String(current?.dataset.id) === key;

    if (isMobile && allowToggle && same) {
      tabs.forEach((tab) => syncTabChrome(tab, false));
      panels.forEach((panel) => {
        panel.classList.remove("is-active");
        panel.hidden = true;
      });
      return;
    }

    tabs.forEach((tab) => {
      syncTabChrome(tab, String(tab.dataset.id) === key);
    });

    panels.forEach((panel) => {
      const on = String(panel.dataset.id) === key;
      panel.classList.toggle("is-active", on);
      panel.hidden = !on;
    });
  };

  const placePanels = () => {
    const isMobile = mq.matches;
    if (isMobile === mobileMode) return;
    mobileMode = isMobile;

    if (isMobile) {
      tabs.forEach((tab) => {
        const panel = getPanel(tab.dataset.id);
        if (panel) tab.insertAdjacentElement("afterend", panel);
      });
    } else {
      panels.forEach((panel) => panelsWrap.appendChild(panel));
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (!tab.dataset.id) return;
      setActive(tab.dataset.id, { allowToggle: true });
    });
  });

  placePanels();
  mq.addEventListener("change", placePanels);

  const initial =
    tabs.find((tab) => tab.classList.contains("is-active"))?.dataset.id ||
    panels.find((panel) => panel.classList.contains("is-active"))?.dataset.id ||
    "1";

  setActive(initial);
};
