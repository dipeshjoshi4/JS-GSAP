

function pageOneAnimation() {

var tl = gsap.timeline();

tl.from("nav h1, nav h4, nav button", {
    y: -30,
    duration: 0.6,
    delay: 0.7,
    opacity: 0,
    stagger: 0.2
})

tl.from(".center-part-1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.4
})

tl.from(".center-part-1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4
})

tl.from(".center-part-1 button", {
    opacity: 0,
    duration: 0.4
})

tl.from(".center-part-2 img", {
    opacity: 0,
    duration: 0.5,
    x: 200
}, "-=0.3")

tl.from(".section1Bottom img", {
    y:30,
    opacity: 0,
    duration: 0.6,
    stagger:0.15
})

}



function pageTwoAnimation() {

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top -60%",
            scrub: 2,
        }
    })


    tl2.from(".services", {
        y: 30,
        opacity: 0,
        duration: 0.5
    })

    // line-1
    tl2.from(".elem.line1.left", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "anim")
    tl2.from(".elem.line1.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "anim")

    // line-2
    tl2.from(".elem.line2.left", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "anim2")
    tl2.from(".elem.line2.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "anim2")

    // line-3
    tl2.from(".elem.line3.left", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "anim3")
    tl2.from(".elem.line3.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "anim3")

    // line-4
    tl2.from(".elem.line4.left", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "anim4")

    tl2.from(".elem.line4.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "anim4")

}

pageOneAnimation();
pageTwoAnimation();