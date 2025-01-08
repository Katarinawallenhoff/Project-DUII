document.title = "Numbers:: Clear";

let theButton = document.getElementById("fillClear");


function randomizer(){

   return Math.floor(Math.random() * 100);
}

function clear() {
    const boxes = document.querySelectorAll('.numberBox');

    for (let box of boxes) {

        box.addEventListener("mouseover", function() {
            if (box.style.backgroundColor === "red") {
                box.style.color = "orange";
                box.style.backgroundColor = "orange";
            } else {
                box.style.backgroundColor = "blue";
            }
        });

        box.addEventListener("mouseout", function() {
            if (box.style.backgroundColor === "orange") {
                box.style.backgroundColor = "red";
                box.style.color = "red";
            } else {
                box.style.backgroundColor = "lightgray";
            }
        });

        box.addEventListener("click", function() {
            if (box.style.backgroundColor === "blue") {
                box.style.color = "orange";
                box.style.backgroundColor = "orange";
            } else if (box.style.backgroundColor === "orange") {
                box.style.backgroundColor = "blue";
                box.textContent = `${randomizer()}`;
                box.style.color = "black";
            }
        });
    }

    theButton.addEventListener("click", function() {
        for (let box of boxes) {
            if (box.style.color === "red") {
                box.style.color = "black";
                box.textContent = `${randomizer()}`;
                box.style.backgroundColor = "lightgray";
            }
        }
    });
}

clear();




numButton.addEventListener("click", function(){
    clear();

});