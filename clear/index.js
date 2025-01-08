document.title = "Numbers:: Clear";

let theButton = document.getElementById("fillClear");


function clear(){
    const boxes = document.querySelectorAll('.numberBox');

    for(let box of boxes){

        box.addEventListener("mouseover", function(){

            if(box.style.color != "red" && box.style.color != "orange"){

                box.style.backgroundColor = "blue";

            };

            box.addEventListener("click", function(){

                box.style.color = "red";
                box.style.backgroundColor = "red";
            });
        });

        box.addEventListener("mouseout", function(){
            if(box.style.color == "red"){
                box.style.backgroundColor = "orange";
                box.style.color = "orange";
            }

            if(box.style.color != "orange"){
                box.style.backgroundColor ="lightgray";
            }
        })
    }

    theButton.addEventListener("click", function(){

        for(let box of boxes){

            box.style.backgroundColor = "lightgray";
            box.style.color = "black";
        }
    })
}

clear();

numButton.addEventListener("click", function(){
    clear();
});