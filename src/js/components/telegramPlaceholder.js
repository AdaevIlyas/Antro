export const telegramPlaceholder = () => {
  const inputs = document.querySelectorAll(".telegram-name__input");
  if (!inputs.length) return;

  const mobileBreakpoint = window.matchMedia("(max-width: 480px)");

  const updatePlaceholders = () => {
    inputs.forEach((input) => {
      // Store original placeholder if not already stored
      if (!input.hasAttribute("data-desktop-placeholder")) {
        input.setAttribute("data-desktop-placeholder", input.placeholder);
      }

      const desktopPlaceholder = input.getAttribute("data-desktop-placeholder");
      const mobilePlaceholder =
        input.getAttribute("data-mobile-placeholder") || "Никнейм в TG";

      if (mobileBreakpoint.matches) {
        input.placeholder = mobilePlaceholder;
      } else {
        input.placeholder = desktopPlaceholder;
      }
    });
  };

  // Initial check
  updatePlaceholders();

  // Listen for resize
  try {
    mobileBreakpoint.addEventListener("change", updatePlaceholders);
  } catch (e) {
    // Fallback for older browsers
    mobileBreakpoint.addListener(updatePlaceholders);
  }
};
