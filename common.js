
const numberCont = document.getElementById("numberContainer");

function getRandomNumbersArray(count = 95) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 100)); 
    }
    return numbers;
}

let randomNumber = getRandomNumbersArray();


function createNumberBoxes(numbers) {
    const container = document.getElementById("numberContainer");

    numbers.forEach((number) => {
        const box = document.createElement("div");
        box.classList.add("numberBox");
        box.textContent = number; 
        container.appendChild(box); 
    });
}
const randomNumbers = getRandomNumbersArray();
createNumberBoxes(randomNumbers);










