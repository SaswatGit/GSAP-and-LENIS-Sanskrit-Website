gsap.registerPlugin(ScrollTrigger);



gsap.from("#nom .head:nth-child(1) h1", {x: "-170%", duration: 0.5, scrollTrigger: {
    trigger: "#nom",
    start: "top bottom",
    end: "bottom top",
    scrub: 0.5,
}});
gsap.from("#nom .head:nth-child(2) h1", {x: "170%", duration: 0.5, scrollTrigger: {
    trigger: "#nom",
    start: "top bottom",
    end: "bottom top",
    scrub: 0.5,
}});
gsap.from("#nom .content p", {x: "100%", opacity: 0, duration: 0.5, stagger: 0.2, scrollTrigger: {
    trigger: "#nom .content p",
    start: "top 70%",
    end: "bottom center",
    scrub: 0.5,
}});


