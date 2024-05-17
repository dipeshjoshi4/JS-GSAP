
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
                x: dets.x - elem.getBoundingClientRect().x - 140,
                y: dets.y - elem.getBoundingClientRect().y - 100
            })
        })
    })
}

function page3VideoAnimation() {

    var page3Center = document.querySelector(".page3-center");
    var video = document.querySelector("#page3 video");

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })

    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
    
}

function page7VideoAnimation() {
    var sections = document.querySelectorAll(".sec-right")
    
    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })
}

function page8CardVideoAnimation() {

    var sections = document.querySelectorAll("#card");

    sections.forEach(function (elem) {

        elem.addEventListener("mouseenter", function () {
            elem.childNodes[9].style.opacity = 1
            elem.childNodes[9].play()
            elem.childNodes[9].style.height = "70vh"
            elem.childNodes[7].style.opacity = 0
        })

        elem.addEventListener("mouseleave", function () {
            elem.childNodes[9].style.opacity = 0
            elem.childNodes[7].style.opacity = 1
            elem.childNodes[9].play()
            // elem.childNodes[7].style.opacity = 1

        })

    })
}
 
// navAnimation();

// page2Animation();

// page3VideoAnimation()

// page7VideoAnimation()

page8CardVideoAnimation()


