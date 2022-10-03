const itemELRef = document.querySelectorAll(".item");
console.log(`Number of categories:`, itemELRef.length);

// const h2Ref = document.querySelector("h2");
// console.log("Category:", h2Ref.textContent);

const titleAndNumberOfElements = itemELRef.forEach(
  (element) =>
    console.log("Category:", element.querySelector("h2").textContent) ||
    console.log("Element:", element.querySelector("ul").childElementCount)
);
