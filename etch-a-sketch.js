const frame = document.querySelector('div');

rows = document.createElement('div');
rows.setAttribute("id","row");
rows.setAttribute("class","row");


cols = document.createElement('div');
cols.setAttribute("class","col");

/*Grid generations*/

for (let i = 0; i < 16; i++){
    let clone = cols.cloneNode(true);
    clone.id = "col"+i;
    rows.appendChild(clone);
}

for (let i = 0; i < 16; ++i){
    let clone = rows.cloneNode(true);
    clone.id = "row"+i;
    frame.appendChild(clone);
}

