document.title = "Numbers:: Add Up To";

let addInput = document.getElementById("addUpTo");
let findButton = document.getElementById("findIt");

addInput.value = 120;


function findNumbers(number){

    const boxes = document.querySelectorAll('.numberBox');

    for(let box of boxes){
        box.style.backgroundColor = "lightgray";
    }

    for(let box of boxes){

        for(let box2 of boxes){

            if(box !== box2 && parseFloat(box.textContent) + parseFloat(box2.textContent) === number){

                box.style.backgroundColor = "lightgreen";
                box2.style.backgroundColor = "lightgreen";

                return;

            }
        }

    }

    






}

findButton.addEventListener("click", function(){
    findNumbers(parseFloat(addInput.value));
})
