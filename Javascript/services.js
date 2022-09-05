let myBtn = document.getElementById("show-menu");
let myLists = document.querySelector("ul");

myBtn.addEventListener("click", function () {
  myLists.classList.toggle("show");
});

//gsap

const tl = gsap.timeline({
  defaults: {
    ease: "power1.out",
  },
});

tl.fromTo(
  "main",
  {
    opacity: "0",
    transform: "scale(0)",
    duration: 1.2,
  },
  {
    opacity: "1",
    transform: "scale(1)",
    duration: 1.5,
  }
);
tl.fromTo(
  ".left",
  {
    opacity: "0",
    transform: "scale(0)",
    duration: 1.2,
  },
  {
    opacity: "1",
    transform: "scale(1)",
    duration: 1.5,
  }
);

tl.fromTo(
  ".title",
  {
    opacity: "0",
    duration: 1,
  },
  {
    opacity: "1",
    duration: 1.5,
    delay: 0.3,
  }
);
tl.fromTo(
  ".one",
  {
    opacity: "0",
  },
  {
    opacity: "1",
    duration: 0.3,
  }
);
tl.fromTo(
  ".two",
  {
    opacity: "0",
  },
  {
    opacity: "1",
    delay: 0.5,
    duration: 0.3,
  }
);
tl.fromTo(
  ".three",
  {
    opacity: "0",
  },
  {
    opacity: "1",
    delay: 0.5,
    duration: 0.3,
  }
);

tl.fromTo(
  ".go-back-to-home",
  {
    opacity: "0",
    duration: 1,
  },
  {
    opacity: "1",
    duration: 1,
  }
);
