document.title = "Numbers::Sum";

let secondInput = document.getElementById("sumOfMa");
let firstInput = document.getElementById("sumOfAll");


secondInput.value = "-";

function startNumber(){

    const boxes = document.querySelectorAll('.numberBox');

    for(let box of boxes){

        sumOfA = 0;

    for(let box of boxes){

        sumOfA += parseFloat(box.textContent);
    }
    
    firstInput.value = (sumOfA);

    }
    
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

