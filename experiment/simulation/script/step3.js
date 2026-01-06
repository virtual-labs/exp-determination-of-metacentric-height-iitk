function showCalculator() {
    // Create the calculator dynamically
    const volcalculator = document.createElement("div");
    volcalculator.id = "volcalculator";
    volcalculator.style = `
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

    volcalculator.innerHTML = `
        <style>
            .volcalculator .input-group {
                margin-bottom: 12px;
            }
            .volcalculator label {
                display: block;
                margin-bottom: 6px;
                font-weight: bold;
            }
            .volcalculator input {
                width: 100%;
                padding: 6px 8px;
                box-sizing: border-box;
            }
            .volcalculator button {
                margin-top: 10px;
                padding: 8px 12px;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
                 background-color:rgb(81, 164, 253);
            }
            .volcalculator button:hover {
                background-color: #0056b3;
            }
            .volcalculator .result {
                margin-top: 12px;
                font-weight: bold;
                min-height: 1.2em;
            }
            .volcalculator .finish-btn {
                margin-top: 10px;
                cursor:pointer;
                 background-color:rgb(81, 164, 253);
            }
            .volcalculator .finish-btn:hover {
                background-color: #0056b3;
            }
        </style>
        <div class="volcalculator">
            <h2>Water Displaced Calculator</h2>
            <div class="input-group">
                <label for="Length">Length of water tank:</label>
                <input type="number" id="Length" placeholder="Enter length" required>
            </div>
            <div class="input-group">
                <label for="Breadth">Breadth:</label>
                <input type="number" id="Breadth" placeholder="Enter Breadth" required>
            </div>
            <div class="input-group">
                <label for="initialheigth">Initial heigth:</label>
                <input type="number" id="initialheigth" placeholder="Enter Initial heigth" required>
            </div>
            <div class="input-group">
                <label for="finalheigth">Final heigth:</label>
                <input type="number" id="finalheigth" placeholder="Enter Final heigth" required>
            </div>
            <button id="calculateButton">Calculate</button>
            <button id="finishButton" class="finish-btn">Finish</button>
            <div class="result" id="result"></div>
        </div>
    `;

    document.body.appendChild(volcalculator);

    setTimeout(() => {
        volcalculator.style.opacity = '1'; // Fade in after 1 second
    }, 800);

    // Event listener for calculation
    document.getElementById("calculateButton").addEventListener("click", function() {
        const l = parseFloat(document.getElementById("Length").value);
        const b = parseFloat(document.getElementById("Breadth").value);
        const i = parseFloat(document.getElementById("initialheigth").value);
        const f = parseFloat(document.getElementById("finalheigth").value);

        const resultElement = document.getElementById("result");
        if (isNaN(l) || isNaN(b) || isNaN(i) || isNaN(f)) {
            resultElement.textContent = "Please enter valid numbers.";
            return;
        }

        if (f === 0) {
            resultElement.textContent = "Final heigth cannot be zero.";
            return;
        }

        const vol = (l * b)*(f-i);

        resultElement.textContent = `Volume displaced is ${vol}cm^3`;
    });

    // Event listener for finish button
    document.getElementById("finishButton").addEventListener("click", function() {
        volcalculator.style.opacity = '0'; // Fade out
         startbutton.style.visibility = "visible";
        setTimeout(() => {
            volcalculator.remove();
             setTimeout(() => {
        ins.textContent = "Instruction:Click on the next button";
    },300);
        }, 300); // Match fade-out duration
    });
}
