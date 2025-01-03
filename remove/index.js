document.title = "Numbers::Remove";

const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");
const firstButton = document.getElementById("first");
const secondButton = document.getElementById("second");


secondInput.value = "-";
firstInput.value = "-";

function getRandomNumber(){

    return Math.floor(Math.random() * 100);

}


firstButton.addEventListener("click", function(){
    let aRandomNumber = getRandomNumber();
    firstInput.value = `${aRandomNumber}`;

    const boxes = document.querySelectorAll('.numberBox');


     for (let box of boxes) {

        if(box.textContent == firstInput.value){

            box.style.backgroundColor = "yellow";
        }else{
            
            box.style.backgroundColor = "lightgray";
        }

        if(box.textContent == "X"){
            box.style.backgroundColor = "red";
         }
     }
   
});


secondButton.addEventListener("click", function(){

    const boxes = document.querySelectorAll('.numberBox');

    let counter = 0;

    for(let box of boxes){
        
        if(box.textContent == firstInput.value){

            box.style.backgroundColor = "red";
            box.textContent = "X";
            box.style.color = "darkred";

            counter += 1;

        }
    
    }

    for(let box of boxes){

        if(box.textContent !== firstInput.value){

            secondInput.value = "Nothing to remove";
        }
    }

    if(0 < counter && 1.5 > counter){
        secondInput.value = `${firstInput.value} was removed ${counter} time`;
    }

    if(1 < counter){

        secondInput.value = `${firstInput.value} was removed ${counter} times`;
    }
   
    
});
