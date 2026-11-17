const initBenchInformers = () => {
  const informers = [...document.querySelectorAll(".js-bench-informer")];
  if (!informers.length) return;

  const mq = window.matchMedia("(max-width: 480px)");
  let overlay = document.querySelector(".js-bench-informer-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className =
      "bench-funnel__informer-overlay js-bench-informer-overlay";
    document.body.appendChild(overlay);
  }

  const restorePopup = (informer) => {
    const popup = informer._popupEl;
    if (popup && popup.parentElement !== informer) {
      informer.appendChild(popup);
    }
  };

  const parkPopup = (informer) => {
    const popup =
      informer._popupEl ||
      informer.querySelector(".bench-funnel__informer-popup");
    if (!popup) return;
    informer._popupEl = popup;
    if (mq.matches && popup.parentElement !== document.body) {
      document.body.appendChild(popup);
    }
  };

  const setBodyLock = (locked) => {
    document.body.classList.toggle("bench-informer-open", locked);
    overlay.classList.toggle("is-visible", Boolean(locked && mq.matches));
  };

  const closeInformers = (except) => {
    let stillOpen = false;
    informers.forEach((informer) => {
      if (informer === except) {
        stillOpen = informer.classList.contains("is-open");
        return;
      }
      informer.classList.remove("is-open");
      const btn = informer.querySelector(".js-bench-informer-btn");
      if (btn) btn.setAttribute("aria-expanded", "false");
      const popup = informer._popupEl;
      if (popup) {
        popup.hidden = true;
        popup.classList.remove("is-open");
      }
      restorePopup(informer);
    });
    if (!except || !stillOpen) setBodyLock(false);
    else setBodyLock(stillOpen && mq.matches);
  };

  informers.forEach((informer) => {
    if (informer.dataset.informerReady === "1") return;
    informer.dataset.informerReady = "1";

    const btn = informer.querySelector(".js-bench-informer-btn");
    const tip = informer.querySelector(".bench-funnel__informer-tip");
    const popup = informer.querySelector(".bench-funnel__informer-popup");
    if (!btn || !popup) return;
    informer._popupEl = popup;

    const openMobile = () => {
      informer.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
      parkPopup(informer);
      popup.hidden = false;
      popup.classList.add("is-open");
      setBodyLock(true);
    };

    const closeOne = () => {
      informer.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
      popup.hidden = true;
      popup.classList.remove("is-open");
      restorePopup(informer);
      setBodyLock(false);
    };

    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const willOpen = !informer.classList.contains("is-open");
      closeInformers(willOpen ? informer : null);

      if (!willOpen) {
        closeOne();
        return;
      }

      if (mq.matches) {
        openMobile();
      } else {
        // desktop: tip via hover/focus; click toggles is-open for a11y
        informer.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
        popup.hidden = true;
        setBodyLock(false);
      }
    });

    const closeBtn = popup.querySelector(".js-bench-informer-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        closeInformers();
      });
    }

    popup.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", () => closeInformers());
    });

    // tip unused on mobile; keep reference for hover desktop
    void tip;
  });

  if (overlay.dataset.informerReady === "1") return;
  overlay.dataset.informerReady = "1";

  overlay.addEventListener("click", () => closeInformers());

  document.addEventListener("click", (event) => {
    if (event.target.closest(".js-bench-informer")) return;
    if (event.target.closest(".bench-funnel__informer-popup")) return;
    if (event.target.closest(".bench-funnel__informer-tip")) return;
    closeInformers();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeInformers();
  });

  const onPageScrollIntent = (event) => {
    if (event.target?.closest?.(".bench-funnel__informer-popup")) return;
    closeInformers();
  };

  window.addEventListener("scroll", () => closeInformers(), { passive: true });
  window.addEventListener("wheel", onPageScrollIntent, { passive: true });
  window.addEventListener("touchmove", onPageScrollIntent, { passive: true });

  mq.addEventListener("change", () => closeInformers());
};

export const benchFunnel = () => {
  // page-wide: funnel + metrics legends
  initBenchInformers();

  const root = document.querySelector(".js-bench-funnel");
  if (!root) return;

  const tabs = [...root.querySelectorAll(".js-bench-funnel-tab")];
  const panels = [...root.querySelectorAll(".js-bench-funnel-panel")];
  const nav = root.querySelector(".bench-funnel__nav");
  const panelsWrap = root.querySelector(".bench-funnel__panels");
  if (!tabs.length || !panels.length || !nav || !panelsWrap) return;

  const mq = window.matchMedia("(max-width: 480px)");
  let mobileMode = null;

  const getPanel = (id) =>
    panels.find((panel) => String(panel.dataset.id) === String(id));

  const setActive = (id, { allowToggle = false } = {}) => {
    const key = String(id);
    const isMobile = mq.matches;
    const current = tabs.find((tab) => tab.classList.contains("is-active"));
    const same = String(current?.dataset.id) === key;

    if (isMobile && allowToggle && same) {
      tabs.forEach((tab) => {
        tab.classList.remove("is-active");
        tab.setAttribute("aria-selected", "false");
      });
      panels.forEach((panel) => {
        panel.classList.remove("is-active");
        panel.hidden = true;
      });
      return;
    }

    tabs.forEach((tab) => {
      const on = String(tab.dataset.id) === key;
      tab.classList.toggle("is-active", on);
      tab.setAttribute("aria-selected", on ? "true" : "false");
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
    "3";

  setActive(initial);
};
