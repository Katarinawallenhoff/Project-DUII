document.title = "Numbers::Remove";

const inputNumb = document.getElementById("howMany");
const remButton = document.querySelector("button");
const container = document.getElementById("numberContainer");

inputNumb.value = 95;

remButton.addEventListener("click", function() {
    const count = +inputNumb.value; 
    if (count > 0 && count < 100) {
        container.innerHTML = ""; 
        createNumberBoxes(getRandomNumbersArray(count));
    }
});



