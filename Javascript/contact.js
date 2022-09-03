const form = document.querySelector("form");
const inputName = document.querySelector("#txt");
const inputMail = document.querySelector("#mail");
const inputMsg = document.querySelector("#msg");
const error = document.querySelectorAll(".error");
const success = document.querySelector("#success");

form.addEventListener("submit", validatForm);

function validatForm(e) {
  if (inputName.value.trim() === "" || inputMail.value.trim() ==="" || !isEmail(inputMail.value) || inputMsg.value.trim()=="") {
    e.preventDefault();
    alert("complet your info")
   }


  checkInput();
}

function checkInput() {
  const usernameValue = inputName.value.trim();
  const mailValue = inputMail.value.trim();
  const messageValue = inputMsg.value.trim();

  if (usernameValue === "") {
    setErrorFor(inputName, "Username can't be emty");
  } else {
    setSuccessFor(inputName);
  }

  if (mailValue === "") {
    setErrorFor(inputMail, "email can't be empty");
  } else if (!isEmail(mailValue)) {
    setErrorFor(inputMail, "Enter an Valid Mail");
  } else {
    setSuccessFor(inputMail);
  }

  if (messageValue === "") {
    setErrorFor(inputMsg, "Enter your message please");
  } else if (messageValue.length < 10) {
    setErrorFor(inputMsg, "please enter an long message");
  } else {
    setSuccessFor(inputMsg);
  }

}

function setErrorFor(input, mesage) {
  const formControl = input.parentElement;
  const small = formControl.children[2];
  const user = formControl.children[1];

  small.innerText = mesage;
  user.style.borderBottom = "2px solid red";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const small = formControl.children[2];
  const user = formControl.children[1];

  small.innerText = "";
  user.style.borderBottom = "2px solid green";
}

function isEmail(Mail) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    Mail
  );
}

// menu confugiration
let myBtn = document.getElementById("show-menu");
let myLists = document.querySelector("ul");

myBtn.addEventListener("click", function () {
  myLists.classList.toggle("show");
});

// gsap animation

const tl = gsap.timeline({
  defaults: {
    ease: "power1.out",
  },
});

tl.fromTo(
  "main",
  {
    opacity: "0",
    duration: 1,
  },
  {
    opacity: "1",
    duration: 1.2,
    delay: 0.5,
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
  "form",
  {
    opacity: "0",
    duration: 0.5,
  },
  {
    opacity: "1",
    duration: 1.1,
    delay: 0.5,
  }
);
