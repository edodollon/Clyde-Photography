const aboutButton = document.querySelector('.abtBtn');
const landingOverlay = document.querySelector('.landing-overlay');
const aboutOverlay = document.querySelectorAll('.about-overlay, .info-section-container, .info-image-container');

aboutButton.onclick = function showAboutOverlay() {
  landingOverlay.classList.add('hidden');

  aboutOverlay.forEach( element => {
    element.classList.remove('hidden');
    
    if (element.classList.value === 'about-overlay') {
      element.classList.add('maxHeight');
    }
  })
}