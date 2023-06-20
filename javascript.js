let color;
let mouseDown = false;

const container = document.querySelector(".canvas");
const slider = document.querySelector(".slider");
const sliderNum = document.querySelector(".sliderNum");
const colorPicker = document.querySelector(".colorPicker");
const clearButton = document.querySelector(".clearButton");
const gridButton = document.querySelector(".gridButton");

colorPicker.addEventListener("input", chooseColor);
clearButton.addEventListener("click", clearGrid);
container.addEventListener("mousedown", checkMouse);
container.addEventListener("mouseup", checkMouse);
gridButton.addEventListener("click", toggleGrid);

// Display slider value and update gride on input
sliderNum.textContent = slider.value;
slider.oninput = function() {
    sliderNum.textContent = this.value;
    clearGrid();
}

function chooseColor(e) {
    color = colorPicker.value;
}

function drawGrid(gridSize) {
    for (let i = 0; i < gridSize; i++){
        const row = document.createElement('div');
        row.classList.add("row");

        for (let i = 0; i < gridSize; i++){
            const pixel = document.createElement('div');
            pixel.classList.add("pixel","grid");
            pixel.addEventListener("mousemove", draw);
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
}

function clearGrid(){
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    drawGrid(sliderNum.textContent);
}

function toggleGrid() {
    const pixel = document.querySelectorAll(".pixel");
    pixel.forEach((element) => {
        element.classList.toggle("grid");
    })
}

function checkMouse(e) {
    console.log(e);
    if (e.type === "mousedown") {
        mouseDown = true;
    } else if (e.type === "mouseup") {
        mouseDown = false;
    } else {
        return;
    }  
}

function draw(e){
    if (color === undefined) color = "black";

    if (mouseDown === true) {
    e.target.style.backgroundColor = color; 
    }
}
// Draw grid on load
drawGrid(16);