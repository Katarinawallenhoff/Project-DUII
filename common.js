const numberContainer = document.querySelector("#number-container");
const numberBox = document.querySelector(".number-box");


function createBoxes(){

    for(let i = 0; i < 95; i++){
        let aBox = document.createElement("div");
        aBox.className = numberBox.className;
        numberContainer.appendChild(aBox);
        aBox.textContent = ("h");
    }
    
}

createBoxes();