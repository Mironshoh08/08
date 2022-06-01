var items3 = document.querySelector(".section1__text2")
items3.style.color = "#fff"
items3.style.background = "#142850"

items3.style.background = "#142850"
var items3 = document.querySelector(".section1__text5")
items3.style.color = "#fff"
items3.style.background = "#142850"

var items9 = document.querySelector(".section1__text6")
items9.style.color = "#fff"
items9.style.background = "#142850"

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode"); 
}


let image = document.querySelectorAll(".content__image")

window.addEventListener("scroll", (e) => {

    image.forEach(images => {

        let speed = images.getAttribute("data-speed")

        images.style.transform = `translateX(${window.scrollY * speed}px)`
    });


})





let scrollSection = document.querySelector(".section1__div5")

window.addEventListener("scroll", () => {
    fadeRightAnim(scrollSection, 1.5)
})

function fadeRightAnim(section, coordinate) {
    let fadeRight = section.querySelectorAll(".fade-right")
    fadeRight.forEach(fadeRights => {
        const speed = fadeRights.getAttribute("data-speed")
        fadeRights.style.transition = speed + "ms ease-in-out"
        if (this.scrollY >= (section.offsetTop - section.offsetHeight * coordinate)) {
            fadeRights.classList.add("active")
        } else {
            fadeRights.classList.remove("active")
        }
    });
}
