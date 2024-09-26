let color = false;

const body = document.querySelector("body");
const resetBtn = document.createElement("button");
const title_div = document.createElement("div");
const colorBtn = document.createElement("button");
const whiteBtn = document.createElement("button");

colorBtn.setAttribute("style", "width: 90px; height: 30px; background-color: white");
colorBtn.textContent = "Color";
whiteBtn.setAttribute("style", "width: 90px; height: 30px; background-color: white");
whiteBtn.textContent = "White";

colorBtn.addEventListener("click", ()=>{
    color = true;
})
whiteBtn.addEventListener("click", ()=>{
    color = false; 
})


title_div.setAttribute("style", "display: flex; justify-content: center;\
 align-items: center");

const title = document.createElement("h1");
title_div.appendChild(title);
body.appendChild(title_div)
title.textContent = "Etch-a-Sketch";
title.setAttribute("style", "font-family: helvetica; color: white;\
 margin-left: 15px");


const button_div = document.createElement("div");
button_div.setAttribute("style", "display: flex; justify-content: center;\
 margin-bottom: 25px");
button_div.appendChild(resetBtn);
button_div.appendChild(colorBtn);
button_div.appendChild(whiteBtn);
body.appendChild(button_div);

resetBtn.setAttribute("style", "width:90px; height:30px; background-color: white");
resetBtn.textContent = "Reset"
resetBtn.addEventListener("click", ()=> {
    let size = window.prompt("Enter new grid size:");
    if (size>100 ){
        alert("That is too big. Please provide a grid size below 100");
        size = window.prompt("Enter new grid size:");
    }
    deleteGrid();
    generateGrid(Number(size))
   
})

// creating the grid
body.style.backgroundColor = "black";
generateGrid(16);

function generateGrid(gridSize) {
    for (let i =0; i<gridSize; i++){
        const container = document.createElement("div");
        container.setAttribute("style", `max-width: 625px; max-height: ${625/ gridSize}px;\
         display: flex; margin: 0 auto`);
        container.setAttribute("id", "grid");
        body.appendChild(container)
    
        for (let j=0; j<gridSize; j++){
            const square_div = document.createElement("div");
            square_div.setAttribute("style", "width: 30px; flex: 1; aspect-ratio: 1/1; outline:\
             0.05px solid white; background-color: black; margin: 0px");
            square_div.setAttribute("id", "grid");
            container.appendChild(square_div);
            // hover effect
            square_div.addEventListener("mouseover", ()=> {
                // switch
                switch (color){
                case false:
                    if (square_div.style.backgroundColor == "black") {
                        square_div.style.backgroundColor = "white";
                        square_div.style.opacity = "0.2"; 
                    }
                    else if (square_div.style.backgroundColor == "white") {
                        const num = 0.2;
                        square_div.style.opacity = Math.min(Number(square_div.style.opacity)+num, 1.0).toString();
                    }

                    break;
                case true:
                    let color = colorChange();
                    square_div.style.backgroundColor = color;
                    break;
                }
            })
        }
    }
}

function deleteGrid(){
    divs = document.querySelectorAll("#grid")
    divs.forEach((div) =>{
        div.remove()
    } )

}

function colorChange() {
    var arr = [];
    for(let i=0;i<3; i++) {
        arr.push(Math.floor(Math.random()*255))
    }
    return `rgb(${arr[0]} ${arr[1]} ${arr[2]})`
}