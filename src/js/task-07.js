const inputControlRef= document.querySelector("#font-size-control")
const spanTextRef = document.querySelector("#text")
console.log(inputControlRef.value)
spanTextRef.style.fontSize = inputControlRef.value + "px"


inputControlRef.addEventListener("input", changesTextSize)

function changesTextSize(event) {
    //  console.log(event.currentTarget.value)
    spanTextRef.style.fontSize =event.currentTarget.value + "px";

}