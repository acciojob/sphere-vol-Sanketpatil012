

function volume_sphere() {
   
	event.preventDefault(); // Prevent form from reloading

    let radiusInput = document.getElementById('radius').value; // Get radius input
    let volumeInput = document.getElementById('volume'); // Get volume input field

    let radius = parseFloat(radiusInput); // Convert to number

    // Validate the input (must be a number and non-negative)
    if (isNaN(radius) || radius < 0) {
        volumeInput.value = "NaN"; // Display NaN for invalid input
        return;
    }

    // Calculate sphere volume (V = 4/3 * π * r³)
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display result rounded to 4 decimal places
    volumeInput.value = volume.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
