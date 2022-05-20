// === DOM Elements === //
const linkToFilm = document.querySelector(".film-link");
const linkToPhotos = document.querySelector(".photo-link");

const defaultImage = document.querySelector(".default-img");
const hoverPhoto1 = document.querySelector(".photo1");
const hoverPhoto2 = document.querySelector(".photo2");

// === Functions === //
function filmHover() {
  defaultImage.classList.add("hidden");
  hoverPhoto2.classList.add("hidden");
  hoverPhoto1.classList.remove("hidden");
}

function photoHover() {
  defaultImage.classList.add("hidden");
  hoverPhoto1.classList.add("hidden");
  hoverPhoto2.classList.remove("hidden");
}

function stopHover() {
  defaultImage.classList.remove("hidden");
  hoverPhoto1.classList.add("hidden");
  hoverPhoto2.classList.add("hidden");
}

// === Event Listeners === //
linkToFilm.addEventListener("mouseenter", filmHover);
linkToPhotos.addEventListener("mouseenter", photoHover);
linkToFilm.addEventListener("mouseleave", stopHover);
linkToPhotos.addEventListener("mouseleave", stopHover);
