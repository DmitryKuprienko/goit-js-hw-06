const decBtnRef= document.querySelector(`[data-action="decrement"]`);

const incBtnRef= document.querySelector(`[data-action="increment"]`);
const counterRef  = document.querySelector(`#value`)
// console.log(decBtnRef)
// console.log(incBtnRef)
// console.log(counterRef)
let counterValue = 0 ;
incBtnRef.addEventListener('click', () => {
    counterValue += Number(incBtnRef.textContent);
    // console.log(counterValue)
    counterRef.textContent = String(counterValue);
    // console.log(counterRef)
});
decBtnRef.addEventListener('click', () => {
    counterValue += Number(decBtnRef.textContent);
    // console.log(counterValue)
    counterRef.textContent = String(counterValue);
    // console.log(counterRef)
});