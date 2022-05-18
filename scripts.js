// === DOM Elements === //
const aboutOverlay = document.querySelector(".about-overlay");
const mainName = document.querySelector(".main-name");
const mainBio = document.querySelector(".main-bio");
const clydeImage = document.querySelector(".info-img");
const phone = document.querySelector(".phone-number");;
const email = document.querySelector(".email");
const insta = document.querySelector(".instagram");

// === Functions === //
function animateElements() {
  mainName.classList.add("animateMainName");
  mainBio.classList.add("animateFadeIn");
  clydeImage.classList.add("animateFadeIn");
  phone.classList.add("animateSlideIn1");
  email.classList.add("animateSlideIn2");
  insta.classList.add("animateSlideIn3");
}

// === Event Listeners === //
window.addEventListener("load", animateElements);
