const menu = document.querySelector("#menu");
const svg = document.querySelector(".svg-container svg");

gsap.set("#navbar", {x: "100%"});

menu.addEventListener("click", function(){
    gsap.to("#navbar", {x: 0, duration: 2, ease: "elastic"});
});

svg.addEventListener("click", function(){
    gsap.to("#navbar", {x: "100%", duration: 0.5})
});