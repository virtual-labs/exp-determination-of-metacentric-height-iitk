const protractor = document.getElementById("protractor");
const instruction = document.getElementById("ins");

// Initial position
const initialTop = 292;
const initialLeft = 625;

function moveUp() {
  protractor.style.top = `${initialTop - 200}px`;
}

function moveLeft() {
  protractor.style.left = `${initialLeft - 390}px`;
}

function moveBack() {
  protractor.style.top = `${initialTop}px`;
  protractor.style.left = `${initialLeft}px`;
  setTimeout(() => {
    instruction.textContent = "STEP 8: Calculate the metancentric height(GM)";
    fadeOutImages();
    setTimeout(displayCalculator, 500);
  }, 500); // Slight delay to ensure smooth transition
}
function fadeOutImages() {
  protractor.style.transition = "opacity 1s ease";
  pontoon.style.transition = "opacity 1s ease";
  watertank.style.transition = "opacity 1s ease";
  weight.style.transition = "opacity 1s ease";

  protractor.style.opacity = "0";
  pontoon.style.opacity = "0";
  watertank.style.opacity = "0";
  weight.style.opacity = "0";
}

function moveProtractor() {
  setTimeout(moveUp, 500); // Move up after 0.5s
  setTimeout(moveLeft, 1000); // Move left after 1s
  setTimeout(() => {
    setTimeout(moveBack, 3000); // Stay in position for 3 seconds
  }, 1500); // Wait for the move left animation to complete
}
