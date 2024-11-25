// Function to generate a random hex color
function getRandomHexColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16); // 0xFFFFFF is the range of hex colors
    return "#" + randomColor.padStart(6, '0'); // Ensure the color is always 6 digits (pad if necessary)
}

function changeColor() {
    for (let i = 1; i <= 4; i++) {
        const circle = document.getElementById(`circle${i}`);
        const label = document.getElementById(`label${i}`);
        const hexColor = getRandomHexColor();
        circle.style.backgroundColor = hexColor;
        label.textContent = hexColor; // Update label with hex color code
    }
}
