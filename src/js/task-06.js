 const inputField = document.querySelector("#validation-input")
//  console.log(inputField.dataset.length)
 
function validInput(event){
    inputField.classList.add('invalid');

    const eventValue = event.currentTarget.value
    if (eventValue.length == inputField.dataset.length) {
        inputField.classList.replace('invalid', 'valid');
         } 
     }




 inputField.addEventListener("blur", validInput)