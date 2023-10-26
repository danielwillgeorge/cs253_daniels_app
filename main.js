// Get a reference to the button and the element to change
var button = document.getElementById('changeColorButton');
var textElement = document.getElementById('textToChangeColor');

// Add a click event listener to the button
button.addEventListener('click', function() {
    // Generate a random color and set it as the text color
    var randomColor = getRandomColor();
    textElement.style.color = randomColor;
});

// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
