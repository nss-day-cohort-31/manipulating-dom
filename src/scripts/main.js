console.log("Linked main.js")

/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/
// const sectionEl = document.querySelector(".article__section")
// console.log(sectionEl)

const footerEl = document.querySelector(".article__footer")
console.log(footerEl)

const smallTextEl = document.querySelector(".smallText")
console.log("before", smallTextEl)
smallTextEl.classList.remove("smallText")
smallTextEl.classList.add("largeText")
console.log("after", smallTextEl)

smallTextEl.textContent = "NEW TEXT"

/*
    This code will return all section components
*/
const sectionEl = document.querySelectorAll("section")
console.log("all elements with class article__section", sectionEl)

for(let i = 0; i < sectionEl.length; i++) {
  sectionEl[i].classList.add("new__class")
}
