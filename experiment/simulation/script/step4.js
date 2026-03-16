const weight = document.getElementById('weight');
const moveButton = document.getElementById('moveButton');
const xArrow = document.getElementById("xArrow");



    function animateImage() {
      setTimeout(() => {
        // Move upward
        weight.style.top = '50px';
      }, 500);

      setTimeout(() => {
        // Move left
        weight.style.left = '380px';
      }, 1500);

      setTimeout(() => {
        // Move downward
        weight.style.top = '170px';
      }, 2500);

      setTimeout(() => {
        // Rotate 90 degrees
        weight.style.transform = 'rotate(90deg)';
      }, 3500);

      setTimeout(() => {
        // Move left again
        weight.style.left = '280px';

        // Make the image fixed and unclickable
        weight.classList.add('fixed');
        weight.removeEventListener('click', handleClick);
         xArrow.style.display = "block";

           // Change the instruction text after completion
        setTimeout(() => {
          ins.textContent = "STEP 6:Click on the move button to move the weight horizontally across a cross bar towards one side (X), causing it to tilt.";
          

           setTimeout(() => {
            // Display the move button
        moveButton.style.display = 'block';

        
        }, 200); 
      }, 1200); 
      
      }, 4500);
    }

    // Click handler function
    function handleClick() {
      animateImage();
    }

    // Initialize starting position
    weight.style.top = '320px';
    weight.style.left = '570px';

    // Add click event listener
    weight.addEventListener('click', handleClick);