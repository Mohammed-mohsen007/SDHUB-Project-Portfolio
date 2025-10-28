

let colorChange = document.querySelector("input")
let bgColorChange = document.querySelector("body")

colorChange.addEventListener('input', () => {
    bgColorChange.style.backgroundColor = colorChange.value

})

// addEventListener('mousemove')