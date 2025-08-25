function displayCalculator() {
    // Create the calculator dynamically
    const gmcalculator = document.createElement("div");
    gmcalculator.id = "gmcalculator";
    gmcalculator.style = `
        position: fixed;
        top: 200px;
        right: 600px;
        background: #f0f8ff;
        border: 2px solid #007BFF;
        border-radius: 10px;
        padding: 15px;
        z-index: 1100;
        width: 300px;
        font-family: Arial, sans-serif;
        opacity: 0;
        transition: opacity 0.5s ease-in;
    `;

    gmcalculator.innerHTML = `
        <style>
            .gmcalculator .input-group {
                margin-bottom: 12px;
            }
            .gmcalculator label {
                display: block;
                margin-bottom: 6px;
                font-weight: bold;
            }
            .gmcalculator input {
                width: 100%;
                padding: 6px 8px;
                box-sizing: border-box;
            }
            .gmcalculator button {
                margin-top: 10px;
                padding: 8px 12px;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
                 background-color:rgb(81, 164, 253);
            }
            .gmcalculator button:hover {
                background-color: #0056b3;
            }
            .gmcalculator .result {
                margin-top: 12px;
                font-weight: bold;
                min-height: 1.2em;
            }
            .gmcalculator .finish-btn {
                margin-top: 10px;
                cursor:pointer;
                 background-color:rgb(81, 164, 253);
            }
            .gmcalculator .finish-btn:hover {
                background-color: #0056b3;
            }
        </style>
        <div class="gmcalculator">
            <h2>GM Calculator</h2>
            <div class="input-group">
                <label for="distance">Distance (x):</label>
                <input type="number" id="distance" placeholder="Enter distance (x)" required>
            </div>
            <div class="input-group">
                <label for="weightSmall">Weight (w):</label>
                <input type="number" id="weightSmall" placeholder="Enter weight (w)" required>
            </div>
            <div class="input-group">
                <label for="weightLarge">Weight (W):</label>
                <input type="number" id="weightLarge" placeholder="Enter weight (W)" required>
            </div>
            <div class="input-group">
                <label for="angle">Angle (θ in degrees):</label>
                <input type="number" id="angle" placeholder="Enter angle (θ)" required>
            </div>
            <button id="calculateBtn">Calculate GM</button>
            <button id="finishBtn" class="finish-btn">Finish</button>
            <div class="result" id="result"></div>
        </div>
    `;

    document.body.appendChild(gmcalculator);

    setTimeout(() => {
        gmcalculator.style.opacity = '1'; // Fade in after 1 second
    }, 800);

    // Event listener for calculation
    document.getElementById("calculateBtn").addEventListener("click", function() {
        const x = parseFloat(document.getElementById("distance").value);
        const w = parseFloat(document.getElementById("weightSmall").value);
        const W = parseFloat(document.getElementById("weightLarge").value);
        const theta = parseFloat(document.getElementById("angle").value);

        const resultElement = document.getElementById("result");
        if (isNaN(x) || isNaN(w) || isNaN(W) || isNaN(theta)) {
            resultElement.textContent = "Please enter valid numbers.";
            return;
        }

        if (W === 0) {
            resultElement.textContent = "Weight (W) cannot be zero.";
            return;
        }

        const thetaRadians = theta * (Math.PI / 180);
        const gm = (w * x) / (W * Math.tan(thetaRadians));

        resultElement.textContent = `GM = ${gm.toFixed(4)}`;
    });

    // Event listener for finish button
    document.getElementById("finishBtn").addEventListener("click", function() {
        gmcalculator.style.opacity = '0'; // Fade out
        setTimeout(() => {
            gmcalculator.remove();
             setTimeout(() => {
        level1.style.display = "block";
        level1.textContent = "Repeat the experiment for different weights.";

        setTimeout(() => {
          level1.style.display = "none";
          level1.textContent = "";

          setTimeout(() =>{
              ins.innerHTML="STEP 9: Observation Table";
          },500);
        }, 3000);
    },500);
        }, 300); // Match fade-out duration
    });
}
