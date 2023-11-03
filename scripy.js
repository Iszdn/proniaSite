const searchLoop = document.getElementById("searchLoop");
const body = document.querySelector("body");
const modal = document.createElement("div");
let close = document.createElement("span");
let searchContent = document.createElement("div");
let spanSearch = document.createElement("span");
let inputSearch = document.createElement("input");

close.classList.add("close");
searchContent.classList.add("searchContent");

searchContent.append(spanSearch, inputSearch);
modal.append(close, searchContent);
body.append(modal);
// console.log(searchLoop);
searchLoop.addEventListener("click", (e) => {
  e.preventDefault();
});
