document.title = "Numbers::Remove";

let theNum = document.getElementById("remove");
let bodyEl = document.body;

theNum.addEventListener("keydown", function(e) {
    // Check if the pressed key is "Enter"
    if (e.key === "Enter") {
        let number = theNum.value; // Get the input value
        let newDiv = document.createElement("h1"); // Create a new <h1> element
        newDiv.textContent = number; // Set its content to the input value
        bodyEl.appendChild(newDiv); // Append the <h1> to the body

        theNum.value = ""; // Clear the input field after appending
    }
});