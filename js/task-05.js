const inputName = document.querySelector("#name-input")
// console.log(inputName)
const nameOutput = document.querySelector("#name-output")
// console.log(nameOutput)

function enteredValues(event) {
    console.log(event)
    if (event.currentTarget.value !== "") {
        nameOutput.textContent = event.currentTarget.value;}
       
     else {
        nameOutput.textContent = "Anonymous"
    }}

// inputName.addEventListener("input", (event) => {
//     console.log(event)
//     if (event.currentTarget.value !== "") {
//         nameOutput.textContent = event.currentTarget.value;}
       
//      else {
//         nameOutput.textContent = "Anonymous"
//     }});
         

    inputName.addEventListener("input", enteredValues );
             
 
    // console.log(nameOutput)
  