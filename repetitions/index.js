document.title = "Numbers::repetitions";

let firstInput = document.getElementById("repeated");
let secondInput = document.getElementById("notInPlace");


function markNumbers(){
    const boxes = document.querySelectorAll('.numberBox');

    let repeatAr = [];

    for(let box of boxes){

        repeatAr.push(parseFloat(box.textContent));
    }

    const repeatedNum = {};
    let mostRepeated = 0;

    for(let i = 0; i<repeatAr.length; i++){
        if(repeatedNum[repeatAr[i]]===undefined){
            repeatedNum[repeatAr[i]] = 1;
        }else{
            repeatedNum[repeatAr[i]]++;
        }
    }

    for(let key in repeatedNum){
        if(repeatedNum[key]>mostRepeated){
            mostRepeated = repeatedNum[key];
        }
    }

    let mostRepeatedNum = {};

    for(let key in repeatedNum){
        if(repeatedNum[key] === mostRepeated){
            mostRepeatedNum[key] = repeatedNum[key];
        }
    }

    let result = "";

    for(let key in mostRepeatedNum){

        result += `${key}, `;
    }

    firstInput.textContent = `${result} (Repeated ${mostRepeated} times)`;


    for(let key in mostRepeatedNum){
        for(let box of boxes){
            if(parseFloat(box.textContent) == key){

                box.style.backgroundColor = "lightblue";
            }
        }
    }

    const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 
        38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 
        56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 
        74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 
        92, 93, 94, 95, 96, 97, 98, 99
      ];

    let result2 = "";

    for (let j = 0; j < numbers.length; j++) {
        if (repeatAr.indexOf(numbers[j]) === -1) { 
            result2 += " " + numbers[j] + ",";  
        }
    }

    secondInput.textContent = `${result2}`;


};

markNumbers();

numButton.addEventListener("click", function(){
    markNumbers();
    
})
