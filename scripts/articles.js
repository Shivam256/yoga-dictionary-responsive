const articles = document.querySelectorAll(".article");

for(let article of articles){
  article.addEventListener("mouseenter",()=>{
    article.firstElementChild.firstElementChild.style.transform = "scale(1.3)";
  })
  article.addEventListener("mouseleave",()=>{
    article.firstElementChild.firstElementChild.style.transform = "scale(1)";
  })
}