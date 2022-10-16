const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Create any element algorythm
// 1. document.createElement()
// 2. document.setAtribute and clases
// 3. add Text (если нужно);
// 4. Insert into dom(привяжи в DOM, свяжи с другим элементом)

const ulNewRef = document.querySelector("#ingredients");
const liNewRef = ingredients
  .map((ingredient) => `<li class="list-item">${ingredient}</li>`)
  .join("");

// console.log(liNewRef);
ulNewRef.innerHTML = liNewRef;
// console.log(ulNewRef);
