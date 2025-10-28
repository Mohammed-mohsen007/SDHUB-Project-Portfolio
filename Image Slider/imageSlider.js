let previousButton = document.getElementById("previousBtn")
let nextButton = document.getElementById("nextBtn")
let sliding = document.getElementById("slider")
slideNumber = 1
let images = document.querySelectorAll("img")
imgLength = images.length

const nextSlide = () => {
    sliding.style.transform = `translateX(-${slideNumber * 400}px)`
    slideNumber++
}

const getFirstSlide = () => {
    sliding.style.transform = `translateX(0px)`
    slideNumber = 1
}

nextButton.addEventListener("click", () => {
    slideNumber < imgLength ? nextSlide() : getFirstSlide()
    })

const previousSlide = () => {
    sliding.style.transform = `translateX(-${(slideNumber-2)* 400}px)` 
    slideNumber--
}


previousButton.addEventListener("click",()=>{
    previousSlide()
})

// previousButton.addEventListener("click",()=>{
//     if (slideNumber < imgLength) {
//         sliding.style.transform = `translateX(-${(slideNumber-2)*400}px)`
//         slideNumber--
//     }
// })