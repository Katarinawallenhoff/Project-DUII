document.title = "Numbers:: Add Up To";

let addInput = document.getElementById("addUpTo");
let findButton = document.getElementById("findIt");

addInput.value = 120;


function findNumbers(number){

    const boxes = document.querySelectorAll('.numberBox');

    let firstArray = [];

    for(let box of boxes){

        firstArray.push(parseFloat(box.textContent));
    }

    






}

findButton.addEventListener("click", function(){
    findNumbers(parseFloat(addInput.value));
})
