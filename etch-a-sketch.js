const frame = document.querySelector('div');

rows = document.createElement('div');
rows.setAttribute("class","row");

pix = document.createElement('div');
pix.setAttribute("class","pixel");

/*Grid generator by cloning rows, then cloning pixels within the rows*/
function generateGrid(){
    for (let i = 1; i < 17; i++){
        let clone = pix.cloneNode(true);
        clone.id = "col"+i;
        rows.appendChild(clone);
    }

    for (let i = 1; i < 17; ++i){
        let clone = rows.cloneNode(true);
        clone.id = "row"+i;
        frame.appendChild(clone);
    }
}

/*pixel highlighter*/
function highlightPixels(){
    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover',(event) => {
            pixel.style.backgroundColor = "yellow";
        })
    })
}

generateGrid();
highlightPixels();