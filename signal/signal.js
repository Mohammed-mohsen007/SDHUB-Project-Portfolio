function changeLight() {
    setTimeout(() => {
        document.querySelector("#red").classList.add("redActive")
        document.querySelector("#yellow").classList.add("yellowActive")
        document.querySelector("#green").classList.add("greenActive")
    }, 0);

// changeLight()

setTimeout(() => {
    document.querySelector("#red").classList.remove("redActive")
    document.querySelector("#yellow").classList.add("yellowActive")
    document.querySelector("#green").classList.remove("greenActive")
}, 4000);

setTimeout(() => {
    document.querySelector("#red").classList.remove("redActive")
    document.querySelector("#yellow").classList.remove("yellowActive")
    document.querySelector("#green").classList.add("greenActive")
}, 6000);

// setTimeout(() => {
//     document.querySelector("#green").classList.add("greenActive")
//     document.querySelector("#red").classList.remove("redActive")
//     document.querySelector("#yellow").classList.remove("yellowActive")
// }, 16000);

}
// changeLight()

function start() {
    setInterval(() => {
        changeLight()
    }, 2000);
}

start()