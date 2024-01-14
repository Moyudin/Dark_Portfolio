ScrollReveal().reveal('.section-bg', {
    duration: 1000,
    delay: 200,
    origin: 'bottom',
    distance: '10px',
    easing: 'ease-in-out',
    reset: false
  });
  
  ScrollReveal().reveal('.py-5', {
    duration: 1000,
    delay: 200,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out',
    reset: false
  });
  
  ScrollReveal().reveal('.pb-5', {
    duration: 1000,
    delay: 200,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out',
    reset: false
  });
   

// Function to check if the device is a mobile device
function isMobileDevice() {
  return window.innerWidth <= 990;
}

if (isMobileDevice()) {
  ScrollReveal().reveal('.card', {
    duration: 1000,
    delay: 200,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out',
    reset: false
  });
}
