const mainContainer = document.querySelector('#mainContainer');


const frame = document.createElement('div');
frame.setAttribute("class", "container");
mainContainer.appendChild(frame);

const colorPicker = document.createElement('div');
colorPicker.setAttribute("id","colorPicker");
mainContainer.appendChild(colorPicker);


const selectorWrapper = document.createElement('div');


selectorWrapper.setAttribute("id","selector-wrapper");
const selector = document.createElement('input');
selector.setAttribute("id","userInput");
selector.setAttribute("placeholder","Enter number of pixels sq");
selector.setAttribute("type","number");
selectorWrapper.appendChild(selector);
document.body.appendChild(selectorWrapper);


const greenButton = document.createElement('button');
greenButton.setAttribute("id","greenButton");
greenButton.style.backgroundColor = "green";
colorPicker.appendChild(greenButton)

const yellowButton = document.createElement('button');
yellowButton.setAttribute("id","yellowButton");
yellowButton.style.backgroundColor = "yellow";
colorPicker.appendChild(yellowButton)

const blueButton = document.createElement('button');
blueButton.setAttribute("id","blueButton");
blueButton.style.backgroundColor = "blue";
colorPicker.appendChild(blueButton)

const whiteButton = document.createElement('button');
whiteButton.setAttribute("id","whiteButton");
whiteButton.style.backgroundColor = "white";
colorPicker.appendChild(whiteButton)

const blackButton = document.createElement('button');
blackButton.setAttribute("id","blackButton");
blackButton.style.backgroundColor = "black";
colorPicker.appendChild(blackButton)

const orangeButton = document.createElement('button');
orangeButton.setAttribute("id","orangeButton");
orangeButton.style.backgroundColor = "orange";
colorPicker.appendChild(orangeButton)

const purpleButton = document.createElement('button');
purpleButton.setAttribute("id","purpleButton");
purpleButton.style.backgroundColor = "purple";
colorPicker.appendChild(purpleButton)

const redButton = document.createElement('button');
redButton.setAttribute("id","redButton");
redButton.style.backgroundColor = "red";
colorPicker.appendChild(redButton)






rows = document.createElement('div');
rows.setAttribute("class","row");

pix = document.createElement('div');
pix.setAttribute("class","pixel");

function getUserInput(){
    let isGenerated = false;
    document.getElementById("userInput").addEventListener('keypress', function(e) {
        if (e.key === 'Enter'&& isGenerated == false) {
        let input = document.getElementById('userInput').value;
        generateGrid(input);
        pickColor();
        isGenerated = true;
        document.getElementById("userInput").disabled = true;
        createButton();
        }
});
}

function createButton(){
    const button = document.createElement('button');
    button.textContent = "Refresh etch-a-sketch";
    selectorWrapper.appendChild(button);
    button.addEventListener('click',(event) => {
        refresh();
    })
}
function refresh(){
    location.reload()

}
   


/*Grid generator by cloning rows, then cloning pixels within the rows*/
function generateGrid(value){
    let userValue = value;
    for (let i = 0; i < userValue; ++i){
        let clone = pix.cloneNode(true);
        clone.id = "col"+i;
        rows.appendChild(clone);
    }

    for (let i = 0; i < userValue; ++i){
        let clone = rows.cloneNode(true);
        clone.id = "row"+i;
        frame.appendChild(clone);
    }
}

function pickColor(){
    let pick = document.querySelector('#colorPicker');
    let colorString = 'yellow';
    highlightPixels(colorString);
    pick.addEventListener('click', (event) => {
        let target = event.target;
        switch(target.id) {
            case 'greenButton':
                colorString = "green";
                highlightPixels(colorString)
                break;
            case 'yellowButton':
                colorString = "yellow";
                highlightPixels(colorString)
                break;
            case 'blueButton':
                colorString = "blue";
                highlightPixels(colorString)
                break;
            case 'whiteButton':
                colorString = "white";
                highlightPixels(colorString)
                break;
            case 'blackButton':
                colorString = "black";
                highlightPixels(colorString)
                break;
            case 'orangeButton':
                colorString = "orange";
                highlightPixels(colorString)
                break;
            case 'purpleButton':
                colorString = "purple";
                highlightPixels(colorString)
                break;
            case 'redButton':
                colorString = 'red';
                highlightPixels(colorString)
                break;
            default:
                colorString = 'yellow';
        }
    })
}

/*pixel highlighter*/
function highlightPixels(input){
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover',(event) => {
            pixel.style.backgroundColor = input;
        });
    });
}
getUserInput();