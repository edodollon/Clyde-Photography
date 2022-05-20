// === DOM Elements === //
const aboutOverlay = document.querySelector(".about-overlay");
const mainName = document.querySelector(".main-name");
const mainBio = document.querySelector(".main-bio");
const clydeImage = document.querySelector(".info-img");
const phone = document.querySelector(".phone-number");
const email = document.querySelector(".email");
const insta = document.querySelector(".instagram");
const link = document.getElementsByTagName("a");
const allElements = [mainName, mainBio, clydeImage, phone, email, insta];

// === Functions === //
function animateElements() {
  mainName.classList.add("animateMainName");
  mainBio.classList.add("animateFadeIn");
  clydeImage.classList.add("animateFadeIn");
  phone.classList.add("animateSlideIn1");
  email.classList.add("animateSlideIn2");
  insta.classList.add("animateSlideIn3");
}

const reverseAnimations = function (callback) {
  mainName.classList.replace("animateMainName", "animateMainName-1");
  mainBio.classList.replace("animateFadeIn", "animateFadeIn-1");
  clydeImage.classList.replace("animateFadeIn", "animateFadeIn-1");
  phone.classList.replace("animateSlideIn1", "animateSlideIn1-1");
  email.classList.replace("animateSlideIn2", "animateSlideIn2-1");
  insta.classList.replace("animateSlideIn3", "animateSlideIn3-1");

  callback();
};

// === Event Listeners === //
window.addEventListener("load", animateElements);

mainName.addEventListener("click", (event) => {
  event.preventDefault();
  reverseAnimations(function () {
    setTimeout(() => {
      window.location.href = "index.html";
    }, 4000);
  });
});