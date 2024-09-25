const body = document.querySelector("body")
for (i =0; i<16; i++){
    const container = document.createElement("div");
    container.setAttribute("style", "width: 1000px; margin: 0 auto");
    body.appendChild(container)

    for (j=0; j<16; j++){
        const square_div = document.createElement("div");
        square_div.setAttribute('style', "width: 55px; height: 55px; outline: 2px solid black; display: inline-block; margin: 0px");
        container.appendChild(square_div);
    }
}