let hours = document.getElementById("hours");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");

setInterval(() => {
let currentTime = new Date();
hours.innerHTML = currentTime.getHours();
minutes.innerHTML = currentTime.getMinutes();
seconds.innerHTML = currentTime.getSeconds();
}, 1000)

// let currentTime = new Date();

// hours.innerHTML = currentTime.getHours();
// minutes.innerHTML = currentTime.getMinutes();
// seconds.innerHTML = currentTime.getSeconds();


let hrs = document.getElementById("hrs2");
let min = document.getElementById("min2");
let sec = document.getElementById("sec2")

setInterval(() => {


let time = new Date();
function convert(cnt) {
    if (hrs <= 12) {
        hrs -= 12
    }
}
hrs.innerHTML = time.getHours();
min.innerHTML = time.getMinutes();
sec.innerHTML = (time.getSeconds()<10?"0":"") + time.getSeconds() 
}, 1000);

// function convertTo12Hrs(convert) {
//     if (condition) {
        
//     }
// }


// let hrs = document.getElementById("hrs2");
// let min = document.getElementById("min2");
// let sec = document.getElementById("sec2")


// let time = new Date();

// hrs.innerHTML = time.getHours();
// min.innerHTML = time.getMinutes();
// sec.innerHTML = time.getSeconds();

// setInterval(() => {
// let time = new Date();
// hrs.innerHTML = time.getHours();
// min.innerHTML = time.getMinutes();
// sec.innerHTML = time.getSeconds();
// }, 1000);
