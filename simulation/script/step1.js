const scale = document.getElementById("scale");
const level = document.getElementById("level");
const instructions = document.getElementById("ins"); // Instruction element
const startbutton = document.getElementById("start");

let s = 1;

function firstmoveScale() {
  const insText = instructions.textContent;

  // Allow only at STEP 1 or STEP 3
  if (!insText.includes("STEP 1") && !insText.includes("STEP 3")) {
    return; // Do nothing if instruction is not STEP 1 or STEP 3
  }

  function animateScale(waterLevelText) {
    scale.style.transition = "all 1s ease";
    scale.style.transform = "translateY(-200px)";

    setTimeout(() => {
      scale.style.transform = "translate(-680px, -100px)";
      setTimeout(() => {
        scale.style.transform = "translate(-680px, -100px) rotate(90deg)";
        setTimeout(() => {
          level.style.display = "block";
          level.textContent = waterLevelText;

          setTimeout(() => {
            level.style.display = "none";
            level.textContent = "";
          }, 5000);

          setTimeout(() => {
            scale.style.transform = "translate(-200px, -100px) rotate(0deg)";
            setTimeout(() => {
              scale.style.transform = "translate(0, 0)";
              startbutton.style.visibility = "visible";
              startbutton.textContent = "NEXT";
              instructions.innerHTML = "Instruction: Click on the next button";
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }

  if (s === 1 && insText.includes("STEP 1")) {
    animateScale("Water Level: 15 cm that is 3/4 of the container");
    s = 2;
  } else if (s === 2 && insText.includes("STEP 3")) {
    animateScale("Water Level: 18 cm");
  }
}

// Function to enable/disable the start button based on instruction step
function checkInstructionAndToggle() {
  const insText = instructions.textContent;
  if (insText.includes("STEP 1") || insText.includes("STEP 3")) {
    startbutton.disabled = false;
  } else {
    startbutton.disabled = false;
  }
}

// Initial check on page load
checkInstructionAndToggle();

// Observe changes in the instruction element
const observer = new MutationObserver(() => {
  checkInstructionAndToggle();
});
observer.observe(instructions, { childList: true, subtree: true });

// Disable button initially
startbutton.disabled = false;
