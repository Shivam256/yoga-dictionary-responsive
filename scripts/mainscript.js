
//carousel code
const carouselImages = document.querySelectorAll(".carousel-item img");


const desktopImages = ["https://631044.smushcdn.com/1410169/wp-content/uploads/2020/09/yoga-banner-2.jpg?lossy=1&strip=1&webp=1","https://i.pinimg.com/originals/6e/37/74/6e3774c194dbe479b62ad4e1eb825672.jpg","https://tikaye.com/wp-content/uploads/2016/07/Yoga-Banner-4.jpg" ]

const mobileImages = ["https://images.unsplash.com/photo-1599447421416-3414500d18a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg4fHx5b2dhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1577900289221-a432e08f3af5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHlvZ2F8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1582105847527-9506d4d0c334?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA4fHx5b2dhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"]

if(window.innerWidth < 860){
  for(let i of carouselImages){
    i.setAttribute("src", mobileImages[0]);
    mobileImages.shift();
  }
}
else{
  for(let i of carouselImages){
    i.setAttribute("src",desktopImages[0]);
    i.setAttribute("style","max-height:53vh;")
    desktopImages.shift();
  }
}

//navigation elem code
const navImg = document.querySelectorAll(".nav-img");
const navImages = ["https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHlvZ2F8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1599447421382-437e6fb32fb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQzfHx5b2dhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"];

for(let i of navImg){
  i.style.backgroundImage = `url(${navImages[0]})`;
  navImages.shift();
}
