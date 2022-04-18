const aboutButton = document.querySelector(".abtBtn");
const landingOverlay = document.querySelector(".landing-overlay");
const aboutOverlay = document.querySelectorAll(
  ".about-overlay, .info-section-container, .info-image-container, .info-img, .main-bio, .main-name, .email, .instagram, .phone-number"
);

aboutButton.onclick = function showAboutOverlay() {
  landingOverlay.classList.add("hidden");

  aboutOverlay.forEach((element) => {
    element.classList.remove("hidden");

    if (element.classList.value === "about-overlay") {
      element.classList.add("maxHeight");
    }

    if (element.classList.value === "main-name") {
      element.classList.add("animateMainName");
    }

    if (element.classList.value === "phone-number") {
      element.classList.add("animateSlideIn1");
    }

    if (element.classList.value === "email") {
      element.classList.add("animateSlideIn2");
    }

    if (element.classList.value === "instagram") {
      element.classList.add("animateSlideIn3");
    }

    if (
      element.classList.value === "main-bio" ||
      element.classList.value === "info-img"
    ) {
      element.classList.add("animateFadeIn");
    }
  });
};
