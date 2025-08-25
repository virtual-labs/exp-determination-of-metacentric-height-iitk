let f = 1; // Move this outside the function to retain state between calls

function start() {
    const level1 = document.getElementById("level1");
    const ins = document.getElementById("ins");
    const startbutton = document.getElementById("start");

    if (f === 1) {
        f = 2;

        // Dynamically set the position and styles for level1
        level1.style.position = "absolute";
        level1.style.bottom = "300px";
        level1.style.left = "55%";
        level1.style.transform = "translateX(-50%)";
        level1.style.width = "400px";
        level1.style.height = "100px";
        level1.style.textAlign = "center";
        level1.style.display = "flex";
        level1.style.alignItems = "center";
        level1.style.justifyContent = "center";
        level1.style.letterSpacing = "2px";

        if (ins.innerHTML === "Instruction: Click on the start button") {
            // Display the text in level1
            level1.style.display = "block";
            level1.textContent = "Determination of metacentric Height(GM)";

            // Hide level1 and reset the instruction text after 3 seconds
            setTimeout(() => {
                level1.style.display = "none";
                ins.textContent = "STEP 1: Click on the scale and measure the level of water.";
                startbutton.style.visibility = "hidden";

                // Change textContent of the startbutton to "NEXT"
                startbutton.textContent = "NEXT";
            }, 3000);
        }
    } else if (f === 2) {
        f = 3; // Update to the next state if necessary
        ins.textContent = "STEP 2: Place the pontoon in a tank of water carefully till it becomes stable and observe the changes in water level.";
        startbutton.style.visibility = "hidden";
        
    }
 else if (f === 3) {
        f = 4; // Update to the next state if necessary
        ins.textContent = "STEP 3: Click on the scale and calculate the amount of water displaced";
        startbutton.style.visibility = "visible";
    }
     else if (f === 4) {
        f = 5; // Update to the next state if necessary
        ins.textContent = "STEP 4: Calculate the amount of water displaced by using the calculator.";
        showCalculator();
        startbutton.style.visibility = "visible";
    }
    else if (f === 5) {
        f = 6;
        startbutton.style.visibility="visible"; // Update to the next state if necessary
         setTimeout(() => {
               // Fade out the scale
    const scale = document.getElementById("scale");
    if (scale) {
      scale.style.transition = "opacity 0.5s ease";
      scale.style.opacity = "0";
      setTimeout(() => {
        scale.remove();

        // Update the instruction
        ins.textContent = "STEP 5: A known weight (w) is placed on the model or hang, ensuring it's initially stable without any oscillations";

        // Move pontoon and watertank
        pontoon.style.transition = "all 1s ease";
        watertank.style.transition = "all 1s ease";
        pontoon.style.transform = "translate(-400px, -100px)";
        watertank.style.transform = "translate(5px, 0)";

        // Make the image visible
        setTimeout(() => {
          const hiddenImage = document.getElementById("weight");
          if (hiddenImage) {
            hiddenImage.style.opacity = "1"; // Fade in the image
          }
        }, 500); // Delay after watertank animation
      }, 500); // Match the CSS transition duration for scale fade-out
    }
          },500)
    }
     
}
