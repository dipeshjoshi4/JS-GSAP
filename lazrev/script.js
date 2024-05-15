
function navAnimation() {
    var nav = document.querySelector("nav");

    nav.addEventListener("mouseenter", function () {

        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.7
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1
        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.5
            }
        })
    })

    nav.addEventListener("mouseleave", function () {

        let tl = gsap.timeline()

        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}


function page2Animation() {
    var elems = document.querySelectorAll(".right-elem");
    elems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            //// console.log(elem.childNodes[3]);
            //// elem.childNodes[3].style.opacity = 1;
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 50,
                y: dets.y - elem.getBoundingClientRect().y - 190
            })
        })
    })
}


navAnimation();

page2Animation();