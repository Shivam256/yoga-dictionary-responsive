window.onload = addRequiredClass

const nm = document.querySelector("#home-head-name");

function addRequiredClass() {
  if (window.innerWidth < 860) {
    document.body.classList.add('mobile');
    nm.style.fontSize = "1.4em";
  } else {
    document.body.classList.remove('mobile');
    nm.style.fontSize = "1.7em";
  }
}

let hamburger = document.querySelector('.hamburger')
let mobileNav = document.querySelector('.nav-list')

let bars = document.querySelectorAll('.hamburger span')

let isActive = false

hamburger.addEventListener('click', function () {
  mobileNav.classList.toggle('open')
  if (!isActive) {
    bars[0].style.transform = 'rotate(45deg)'
    bars[1].style.opacity = '0'
    bars[2].style.transform = 'rotate(-45deg)'
    isActive = true
    // img.style.opacity = "0"
    // btn.style.opacity = "0"

  } else {
    bars[0].style.transform = 'rotate(0deg)'
    bars[1].style.opacity = '1'
    bars[2].style.transform = 'rotate(0deg)'
    // img.style.opacity = "1"
    // btn.style.opacity = "1"
    isActive = false
  }

})