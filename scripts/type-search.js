const asanaContainer = document.querySelector("#asana-container");

const infoContainer = document.querySelector("#info-card");
const body = document.querySelector("body");
const typesSelected = document.querySelectorAll(".type-select");
let filteredData;
let searchStr;

addAllAsanas(data);

for(let typ of typesSelected){
  typ.addEventListener("click",function(){
    typ.classList.add("type-select2");
    //removing other ones 
    for(let k of typesSelected){
      if(k != this){
        if(k.classList.contains("type-select2")){
          k.classList.remove("type-select2");
        }
      }
    }
    //filtering the data
    clearAllAsanas();
    searchStr = this.innerText;
    filteredData = data.filter((asana)=>(
      asana.type.includes(searchStr)
    ))
    console.log(filteredData);

    addAllAsanas(filteredData); 
    
  });
}
