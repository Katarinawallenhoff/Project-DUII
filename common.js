const inputNumb = document.getElementById("howMany");
const numButton = document.querySelector("button");
const container = document.getElementById("numberContainer");
inputNumb.value = 95;

function getRandomNumbersArray(count = 95) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 100)); 
    }
    return numbers;
}

let randomNumber = getRandomNumbersArray();

function createNumberBoxes(numbers) {
    

    numbers.forEach((number) => {
        const box = document.createElement("div");
        box.classList.add("numberBox");
        box.textContent = number; 
        container.appendChild(box); 
    });
}
const randomNumbers = getRandomNumbersArray();
createNumberBoxes(randomNumbers);


numButton.addEventListener("click", function() {
    const count = +inputNumb.value; 
    if (count > 0 && count < 100) {
        container.innerHTML = ""; 
        createNumberBoxes(getRandomNumbersArray(count));
    }
});














