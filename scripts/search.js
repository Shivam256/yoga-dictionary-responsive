const asanaContainer = document.querySelector("#asana-container");
const input = document.querySelector("input");
const infoContainer = document.querySelector("#info-card");
const body = document.querySelector("body");
let searchString;

addAllAsanas(data);

let filteredData;

input.addEventListener("input", () => {
  clearAllAsanas();
  
  searchString = input.value.toLowerCase();
  filteredData = data.filter((asana) => (
    asana.sanskrit_name.toLowerCase().includes(searchString) || asana.english_name.toLowerCase().includes(searchString)
  ));
  addAllAsanas(filteredData);
  if (asanaContainer.childElementCount == 0) {
    console.log("no asana found");
  }
});