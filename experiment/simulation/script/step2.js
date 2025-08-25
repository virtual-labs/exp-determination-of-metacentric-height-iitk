const pontoon = document.getElementById("pontoon");
const level1 = document.getElementById("level1"); // Ensure this exists in your HTML
const ins = document.getElementById("ins"); // Ensure this exists in your HTML
const watertank = document.getElementById("watertank"); // Ensure this exists in your HTML


function movePontoon() {
   const insText = instructions.textContent;

   // Allow only at STEP 2
  if (!insText.includes("STEP 2")) {
    return; // Do nothing if instruction is not STEP 1 or STEP 3
  }
  
  // Move the pontoon upward
  pontoon.style.transition = "all 1s ease";
  pontoon.style.transform = "translateY(-200px)";

  setTimeout(() => {
    // Move the pontoon to the left
    pontoon.style.transform = "translate(-440px, -100px)";

    setTimeout(() => {
      // Place the pontoon inside the water tank
      pontoon.style.transition = "none"; // Temporarily disable transitions
      pontoon.style.transform = "translate(-440px, -100px)";

      // Simulate water level rise
      setTimeout(() => {
        // level1.style.display = "block";
        // level1.textContent = "Water Level: 18 cm";

        setTimeout(() => {
          level1.style.display = "none";
          level1.textContent = "";
        }, 5000);

        // Oscillate the pontoon
        oscillatePontoon();

        // Change the instruction text after completion
        setTimeout(() => {
          ins.textContent = "Instruction: Click on the next button";
        }, 1000); // Wait until the oscillation finishes

        setTimeout(() => {
          // Stabilize the pontoon and water level
          pontoon.style.transition = "all 0.5s ease";
          watertank.style.transition = "all 0.5s ease";
          pontoon.style.transform = "translate(-440px, -100px)";
          startbutton.style.visibility="visible";
          // level1.style.transform = "translateY(-20px)"; // Adjust based on your layout

          // Show the calculator after stabilization
          // showCalculator();
        }, 1200); // Oscillation duration
      }, 1000);
    }, 1000);
  }, 1000);
}

function oscillatePontoon() {
  let count = 0;
  const interval = setInterval(() => {
    count++;
    if (count % 2 === 0) {
      pontoon.style.transform = "translate(-440px, -110px)"; // Upward oscillation
    } else {
      pontoon.style.transform = "translate(-440px, -120px)"; // Downward oscillation
    }
    if (count >= 6) {
      clearInterval(interval); // Stop oscillation after 1 second (6 oscillations)
    }
  }, 166); // 166ms per oscillation (6 times in ~1 second)
}

// Add the event listener to start the process
pontoon.addEventListener("click", movePontoon);
