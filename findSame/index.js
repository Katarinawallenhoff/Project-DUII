document.title = "Numbers:: Find Same";

let theResult = document.getElementById("result");

let resetButton = document.getElementById("reset");

function findNumber(){

    const boxes = document.querySelectorAll('.numberBox');

    let clickedNumber = 0;


    for(let box of boxes){

        let counter = 0;

        box.addEventListener("click", function(){

            clickedNumber = parseFloat(box.textContent);

            for(let box of boxes){

                if(clickedNumber == parseFloat(box.textContent)){

                    box.style.backgroundColor = "lightgreen";
                    counter += 1;

                }

                if(clickedNumber != parseFloat(box.textContent)){

                    box.style.backgroundColor = "lightgray";
                }
            }
        
        if(counter < 2){

            theResult.textContent = `${counter} copy of the number ${clickedNumber}`;

        }

        if(counter > 1){
            theResult.textContent = `${counter} copies of the number ${clickedNumber}`;
        }

        })

    }

    resetButton.addEventListener("click", function(){

        for(let box of boxes){

            box.style.backgroundColor = "lightgray";
        }

        theResult.textContent = `Click on a number to find copies`;
    })


}

findNumber();


numButton.addEventListener("click", function(){
    findNumber();
})