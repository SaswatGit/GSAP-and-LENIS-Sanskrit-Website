gsap.registerPlugin(ScrollTrigger);

gsap.set("#influence", {backgroundColor: "rgb(79, 14, 14)" });
gsap.to("#influence", {backgroundColor: "burlywood",scrollTrigger: {
    trigger: "#influence",
    start: "top 30%",
    scrub: 0.5,
}});
gsap.to("#influence .head h1:nth-child(1)", {y: "700%", scrollTrigger: {
    trigger: "#influence",
    start: "top 100%",
    scrub: 0.5,
}});
gsap.to("#influence .head h1:nth-child(2)", {y: "-700%", scrollTrigger: {
    trigger: "#influence",
    start: "top center",
    scrub: 0.5,
}});
gsap.from("#influence .ani", {y: "50%", stagger: 0.5, scrollTrigger: {
    trigger: "#influence",
    start: "30% 100%",
    scrub: 0.2,
}});


