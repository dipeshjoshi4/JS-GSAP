var nav = document.querySelector("nav");
nav.addEventListener("mouseenter", function () {
    var tl = gsap.timeline()
    tl.to("#nav-bottom", {
        height:"21vh"
    })
    tl.from(".nav-part2 h5", {
        display:"block"
    })
})