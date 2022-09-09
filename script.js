//slider script function
//will use global variable for grid render

var slider = document.getElementById("mySlider");
var output = document.getElementById("scale");
output.innerText = `${slider.value} x ${slider.value}`;

slider.oninput = function() {
    output.innerText = `${this.value} x ${this.value}`; 
}

let size = slider.value;
let gridCanvas = document.querySelector("#grid");

function createGrid(size) {
    for (let i = 1; i >= size; i++) {
        document.createElement("div");

    }

}