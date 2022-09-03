
// menu confugiration
let myBtn = document.getElementById("show-menu");
let myLists = document.querySelector("ul");

myBtn.addEventListener("click", function () {
  myLists.classList.toggle("show");
});



// cercle progress animation
const numbers = document.querySelectorAll('.pourcentage');
const svgEl = document.querySelectorAll('svg circle');
const counters = Array(numbers.length);
const intervals = Array(counters.length);
counters.fill(0);

numbers.forEach((number, index) => {
    intervals[index] = setInterval(() => {
        if(counters[index] === parseInt(number.dataset.num)){
            clearInterval(counters[index]);
        }else{
            counters[index] += 1;
            number.innerHTML = counters[index] + "%";
            svgEl[index].style.strokeDashoffset = Math.floor(472 - 440 * parseFloat(number.dataset.num / 100));
        }
    }, 20);
});


// gsap

const tl= gsap.timeline({
    defaults: {
        ease: 'power1.out'
    }
});

tl.fromTo("main", {
    opacity: ".3",
    x: "100%",
    duration: .5
}, {
    opacity: "1",
    x: "0%",
    duration: 1,
    delay: .5
})

tl.fromTo(".title", {
    opacity: "0",
    duration: 1
}, {
   opacity: '1',
    duration: 1.5,
    delay: .3
})

tl.fromTo(".go-back-to-home", {
    opacity: "0",
    duration: 1
}, {
    opacity: "1",
    duration: 1,
})