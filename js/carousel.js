const buttonNav0 = document.querySelector(".button-nav:nth-child(1)");
const buttonNav1 = document.querySelector(".button-nav:nth-child(2)");
const buttonNav2 = document.querySelector(".button-nav:nth-child(3)");
const buttonNav = [buttonNav0, buttonNav1, buttonNav2];
const controllers = document.querySelectorAll(".controller");
const carouselImg = document.querySelector(".img-carousel");
const titleEl = document.getElementById('title');
const subtitleEl = document.getElementById('subtitle');
const title = ["japon", "mont-blanc", "paris"]
const subtitle = ['<b>Mont-Fuji</b>, déplacement hivernal pour notre nouveau film.', '<b>Mont-Blanc</b>, déplacement hivernal pour notre nouveau film.', '<b>Paris</b>, arrivée à la capitale pour notre nouveau film.']
const backgrounds = ["../../images/japon.jpg", "../../images/mont-blanc.jpg", "../../images/paris.jpg"];

let i = 0;

const startLoop = ()  => {
  i++;
  if(i === 3) i = 0;
  switchImage(i);
  
}


let timer = setInterval(startLoop, 10000);

switchImage(0)

function switchImage(imageIndex){
  buttonNav.forEach(buttonNavEl => {
    buttonNavEl.classList.remove("active")
  })
  carouselImg.classList.remove("1", "2", "3");
  buttonNav[imageIndex].classList.add("active")
  carouselImg.classList.toggle(imageIndex.toString());
  titleEl.style.opacity = 0;
  subtitleEl.style.opacity = 0;
  setTimeout(() => {
    titleEl.textContent = title[imageIndex];
    subtitleEl.innerHTML = subtitle[imageIndex];
    titleEl.style.opacity = 1;
    subtitleEl.style.opacity = 1;
  }, 500)
  //titleEl.textContent = title[imageIndex];
  //subtitleEl.textContent = subtitle[imageIndex];
  carouselImg.style.backgroundImage = `url(${backgrounds[imageIndex]})`;
  clearInterval(timer);
  timer = setInterval(startLoop, 10000);

}

for(let j = 0; j < buttonNav.length; j++){
  buttonNav[j].addEventListener("click", () => {
    switchImage(j)
    i = j;
  })
}

controllers.forEach(controller => {
  controller.addEventListener("click", (e) =>{
    if(e.target.getAttribute("aria-direction") === "left"){
      if(i === 0) i = 2;
      else i--
      switchImage(i);
    }
    else{
      if(i === 2) i = 0;
      else i++;
      switchImage(i);
    }
  })
})
