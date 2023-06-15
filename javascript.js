const container = document.querySelector(".container");
const slider = document.querySelector(".slider");
const sliderNum = document.querySelector(".sliderNum");
const colorPicker = document.querySelectorAll(".color");
const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", clearGrid);

let color = "black";

for(let i = 0; i < colorPicker.length; i++) {
    colorPicker[i].addEventListener("click", chooseColor);
}

sliderNum.textContent = slider.value;

slider.oninput = function() {
    sliderNum.textContent = this.value;
    clearGrid();
}

console.log(slider);
console.log(sliderNum);

container.addEventListener("mousedown", checkMouseDown)
container.addEventListener("mouseup", checkMouseUp)

let mouseDown = false;

function chooseColor(e) {
    color = e.target.classList.value
    color = color.split(' ').pop();
    console.log(color);
}

function drawGrid(gridSize) {
    for (let i = 0; i < gridSize; i++){

        const row = document.createElement('div');
        row.classList.add("row");

        for (let i = 0; i < gridSize; i++){

            const pixel = document.createElement('div');
            pixel.classList.add("pixel");
            pixel.addEventListener("mousemove", draw);
            row.appendChild(pixel);
        }

        container.appendChild(row);
    }
}

function removeGrid(){
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
}

function clearGrid(){
    removeGrid();
    drawGrid(sliderNum.textContent);
}

function checkMouseDown() {
    mouseDown = true;
    console.log("mouse down");
}

function checkMouseUp() {
    mouseDown = false;
    console.log("mouse up");
}

function draw(e){
    if (mouseDown === true) {
    e.target.style.backgroundColor = color; 
    }
}

drawGrid(16);