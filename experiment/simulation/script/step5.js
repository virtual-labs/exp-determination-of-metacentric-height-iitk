document.querySelector("#moveButton").addEventListener("click", () => {
  moveWeightAndRotate(320); // Calls the function when the button is clicked
});

function moveWeightAndRotate(targetPosition, delay = 100) {
  const weight = document.querySelector("#weight"); // Ensure the weight element exists
  const pontoon = document.querySelector("#pontoon"); // Ensure the pontoon element exists
  const moveButton = document.querySelector("#moveButton"); // Ensure the moveButton element exists
  const instruction = document.querySelector("#ins"); // Ensure the h1 element exists
  const xArrow = document.getElementById("xArrow");

  if (!weight || !pontoon) {
    console.error("Required elements not found");
    return;
  }

  // Move the weight element
  setTimeout(() => {
     xArrow.style.display = "none";
    weight.style.left = `${targetPosition}px`; // Set the new position dynamically

    // Add rotation after movement
    setTimeout(() => {
      weight.style.transform = "translate(0px, 30px) rotate(110deg)";
      pontoon.style.transform = "translate(-400px, -100px) rotate(20deg)";

      // Hide the moveButton after all processes
      setTimeout(() => {
        moveButton.style.display = "none"; // Hides the button
        instruction.textContent =
          "STEP 7:Click on the protractor and measure the angle of tilt (θ) and the distance(x) using it."; // Changes the h1 text

        // Make the image visible
        setTimeout(() => {
          const protractor = document.getElementById("protractor");
          if (weight) {
            protractor.style.opacity = "1"; // Fade in the image
          }
        }, 100);
      }, 300); // Slight delay to ensure rotation is completed
    }, 300); // Delay slightly longer than CSS transition to ensure smooth effect
  }, delay);
}
