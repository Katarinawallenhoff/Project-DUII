const inputNumb = document.getElementById("howMany");
const numButton = document.querySelector("button");
const container = document.getElementById("numberContainer");
const topPart = document.getElementById("top");
inputNumb.value = 95;


function createHomeButton(){

    topPart.innerHTML = "";
    let homeLink = document.createElement("a");
    topPart.appendChild(homeLink);
    homeLink.href = "../index.html";
    homeLink.textContent = "Home";
}

createHomeButton();

function getRandomNumbersArray(count = 95) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 100)); 
    }
    return numbers;
}

function createNumberBoxes(numbers) {

    numbers.forEach((number) => {
        const box = document.createElement("div");
        box.classList.add("numberBox");
        box.style.cursor = "pointer";
        box.textContent = number; 
        container.appendChild(box); 
    });
}

const randomNumbers = getRandomNumbersArray();
createNumberBoxes(randomNumbers);


numButton.addEventListener("click", function() {
    const count = +inputNumb.value; 
    if (count > 0) {
        container.innerHTML = ""; 
        createNumberBoxes(getRandomNumbersArray(count));
    }
});














