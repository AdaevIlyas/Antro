const uniquifySvgIds = (root, suffix) => {
  const idMap = new Map();

  root.querySelectorAll("[id]").forEach((el) => {
    const oldId = el.id;
    const newId = `${oldId}${suffix}`;
    idMap.set(oldId, newId);
    el.id = newId;
  });

  if (!idMap.size) return;

  root.querySelectorAll("*").forEach((el) => {
    [...el.attributes].forEach((attr) => {
      if (!attr.value.includes("url(#")) return;

      let nextValue = attr.value;
      idMap.forEach((newId, oldId) => {
        nextValue = nextValue.split(`url(#${oldId})`).join(`url(#${newId})`);
      });
      el.setAttribute(attr.name, nextValue);
    });
  });
};

const fillTrack = (row, track, group, index) => {
  const shift = group.getBoundingClientRect().width;
  if (!shift) return;

  track.style.setProperty("--partners-shift", `${shift}px`);

  const minWidth = row.clientWidth + shift;
  let copy = 1;

  while (track.scrollWidth < minWidth || track.children.length < 2) {
    const clone = group.cloneNode(true);
    uniquifySvgIds(clone, `-m${index}-${copy}`);
    track.appendChild(clone);
    copy += 1;

    if (copy > 12) break;
  }
};

export const partnersMarquee = () => {
  const rows = document.querySelectorAll(".main-about__partners-row");
  if (!rows.length) return;

  rows.forEach((row, index) => {
    if (row.dataset.marqueeReady === "true") return;

    const items = [...row.children];
    if (!items.length) return;

    const track = document.createElement("div");
    track.className = "main-about__partners-track";

    const group = document.createElement("div");
    group.className = "main-about__partners-group";
    items.forEach((item) => group.appendChild(item));
    track.appendChild(group);
    row.appendChild(track);

    fillTrack(row, track, group, index);
    row.dataset.marqueeReady = "true";
  });
};
