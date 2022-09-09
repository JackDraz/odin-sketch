//slider script function
//will use global variable for grid render

var slider = document.getElementById("mySlider");
var output = document.getElementById("scale");
output.innerText = `${slider.value} x ${slider.value}`;

slider.oninput = function() {
    output.innerText = `${this.value} x ${this.value}`; 
}

let number = slider.value;
let gridCanvas = document.getElementById("grid");
let gridCanvasStyle = getComputedStyle(gridCanvas);
const gridWidth = (parseInt(gridCanvasStyle.width));

function createGrid(gridWidth, number) {
    let i = 1;
    while(i <= (number ** 2)) {
        const drawSquare = document.createElement("div");
        drawSquare.style.width = `${gridWidth/number}px`;
        drawSquare.style.height = `${gridWidth/number}px`;
        gridCanvas.appendChild(drawSquare);
        i++;
    }
}

createGrid(gridWidth, 32);