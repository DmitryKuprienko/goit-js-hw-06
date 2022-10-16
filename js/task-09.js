function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).toString(16)
    .padStart(6, 0)}`;
}


const buttonRef =document.querySelector("button.change-color")
const spanRef= document.querySelector(".color")


buttonRef.addEventListener("click",changeBackgroundColorClick)

function changeBackgroundColorClick() {
  const newColor = getRandomHexColor()
  const bodyRef=document.body
  
  bodyRef.style.backgroundColor = newColor;
  spanRef.textContent = `${newColor}`
  // console.dir( spanRef)
}



