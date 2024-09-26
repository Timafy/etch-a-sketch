const body = document.querySelector("body");
const btn = document.createElement("button");
btn.setAttribute("style", "width:80px; height:30px");
btn.textContent = "Reset"
btn.addEventListener("click", ()=> {
    let size = window.prompt("Enter new grid size:");
    if (size>100){
        alert("That is too big. Please provide a grid size below 100");
        let size = window.prompt("Enter new grid size:");
    }
    deleteGrid();
    generateGrid(Number(size))

    
})
body.appendChild(btn);

// creating the grid
body.style.backgroundColor = "black";
generateGrid(16);

function generateGrid(gridSize) {
    for (let i =0; i<gridSize; i++){
        const container = document.createElement("div");
        container.setAttribute("style", `max-width: 750px; max-height: ${750/ gridSize}px; display: flex; margin: 0 auto`);
        body.appendChild(container)
    
        for (let j=0; j<gridSize; j++){
            const square_div = document.createElement("div");
            square_div.setAttribute("style", "width: 30px; flex: 1; aspect-ratio: 1/1; outline: 0.5px solid white; margin: 0px");
            container.appendChild(square_div);
            // hover effect
            square_div.addEventListener("mouseover", ()=> {
                square_div.style.backgroundColor= "white"
            })
        }
    }
}

function deleteGrid(){
    divs = document.querySelectorAll("div")
    divs.forEach((div) =>{
        div.remove()
    } )

}


