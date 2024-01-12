const phrases = ["Web Developer." , "Programmer."];
let currentPhraseIndex = 0;
let currentCharacterIndex = 0;
const animatedText = document.getElementById('animated-text');

function typeText() {
  const currentPhrase = phrases[currentPhraseIndex];
  animatedText.textContent = currentPhrase.substring(0, currentCharacterIndex + 1);
  if (currentCharacterIndex < currentPhrase.length) {
    currentCharacterIndex++;
    setTimeout(typeText, 120); // Adjust the typing speed (milliseconds)
  } else {
    setTimeout(eraseText, 2000); // Wait for a second before erasing
  }
}

function eraseText() {
  if (currentCharacterIndex > 0) {
    const currentPhrase = phrases[currentPhraseIndex];
    animatedText.textContent = currentPhrase.substring(0, currentCharacterIndex - 1);
    currentCharacterIndex--;
    setTimeout(eraseText, 100); // Adjust the erasing speed (milliseconds)
  } else {
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    setTimeout(typeText, 30); // Wait for half a second before typing the next phrase
  }
}
// Start the animation
typeText();




