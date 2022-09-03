
// gsap code
const tl= gsap.timeline({
    defaults: {
        ease: 'power1.out'
    }
});

tl.to(".cover", {
    display: "none",
    duration: 3,

})

tl.fromTo("main", {
    opacity: "0",
    y: "-10%",
    duration: 1
}, {
    opacity: "1",
    y: "0%",
    duration: 1.5,
    delay: .5
})
tl.fromTo("nav", {
    opacity: "0",
    duration: 1
}, {
    opacity: "1",
    duration: 1.5,
})
tl.fromTo(".intro", {
    opacity: "0",
    duration: .5
}, {
    opacity: "1",
    duration: 1,
})

// gsap end


// Javascript start

// text slide animation
let show = document.querySelector(".slid").children;
let showLen = show.length;
let index = 0;
const timeIn = 2500;
const timeOut = 2000;


function showAnimation() {
    for(let i = 0; i < showLen; i++) {
        show[i].classList.remove("show-in")
    }
    show[index].classList.add("show-in");

    setTimeout(function() {
        show[index].classList.add("show-out");
    },timeOut)
    if (index == showLen-1) {
        index = 0;
    }else {
        index++;
    }
    setTimeout(showAnimation, timeIn)
}

window.onload = showAnimation;




