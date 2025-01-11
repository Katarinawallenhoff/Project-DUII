document.title = "Numbers:: Sum";

let secondInput = document.getElementById("sumOfMa");
let firstInput = document.getElementById("sumOfAll");
let resetButton = document.getElementById("rButton");

secondInput.value = "-";

function startNumber(){
    const boxes = document.querySelectorAll('.numberBox');
        sumOfA = 0;
             for(let box of boxes){
                 sumOfA += parseFloat(box.textContent);
            }   
        firstInput.value = (sumOfA);
}   

startNumber();

numButton.addEventListener("click", function(){

    const boxes = document.querySelectorAll('.numberBox');

    sumOfA = 0;
    for(let box of boxes){
        sumOfA += parseFloat(box.textContent);
    }
    
    firstInput.value = (sumOfA);
});

let totalSum = 0;

function sumMarkedNum(){
    const boxes = document.querySelectorAll('.numberBox');
    for(let box of boxes){

        box.addEventListener("click", function(){
            let numbers = 0;

            box.style.backgroundColor = "green";
            numbers = parseFloat(box.textContent);
            totalSum += numbers;
            secondInput.value = (totalSum);  
        })
    }
}
sumMarkedNum();

resetButton.addEventListener("click", function(){

    const boxes = document.querySelectorAll('.numberBox');
    secondInput.value = "-";
    totalSum = 0;

    for(let box of boxes){
        box.style.backgroundColor = "lightgray";
    }
});

numButton.addEventListener("click", function(){
    sumMarkedNum();
    secondInput.value = "-";
    totalSum = 0;
    createHomeButton();
});





