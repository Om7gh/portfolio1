const tl= gsap.timeline({
  defaults: {
      ease: 'power1.out'
  }
});

tl.fromTo(".left-barre", {
  transform: "scale(0)",
  duration: 2
}, {
  transform: "scale(1)",
  duration: 1.5,
})
tl.fromTo(".right-barre", {
  opacity: "0",
  duration: .5
}, {
  opacity: "1",
  duration: 1,
})
tl.fromTo(".go-back-to-home", {
  opacity: "0",
  duration: .5
}, {
  opacity: "1",
  duration: 1,
  delay: .2
})


let myBtn = document.getElementById("show-menu");
let myLists = document.querySelector("ul");

myBtn.addEventListener("click", function () {
  myLists.classList.toggle("show");
});

// marker paragraph

let txt = document.getElementsByTagName("strong");
let color = "#333";

for (let i = 0; i < txt.length; i++) {
  txt[i].style.color = color;
}
