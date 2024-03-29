//slider script function
//will use global variable for grid render

var slider = document.getElementById("mySlider");
var output = document.getElementById("scale");
output.innerText = `${slider.value} x ${slider.value}`;
let num = slider.value;
let colourSquares;

slider.oninput = function() {
    output.innerText = `${this.value} x ${this.value}`;
    return num = this.value;
}

let gridCanvas = document.getElementById("grid");
let gridCanvasStyle = getComputedStyle(gridCanvas);
const canvasWidth = (parseInt(gridCanvasStyle.width));

function createGrid(gridWidth, number) {
    let i = 1;
    while(i <= (number ** 2)) {
        const drawSquare = document.createElement("div");
        drawSquare.classList.toggle("renderSquare");
        drawSquare.style.width = `${gridWidth/number}px`;
        drawSquare.style.height = `${gridWidth/number}px`;
        gridCanvas.appendChild(drawSquare);
        i++;
    }
}

//button and creation of grid
const input = document.querySelector(".submit-button");
input.addEventListener("click", () => {
    gridCanvas.replaceChildren();
    createGrid(canvasWidth, num);

    colourSquares = document.querySelectorAll("div.renderSquare");
    colourSquares.forEach(square => square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    }));
    return colourSquares;
});

