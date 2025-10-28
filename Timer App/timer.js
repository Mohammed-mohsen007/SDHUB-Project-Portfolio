
document.querySelector("#btn").addEventListener("click",()=>{
    let myCounter;
    let seconds = 60;
    function timer() {
        clearInterval(myCounter);
        let mins = parseInt(document.querySelector("#minutes").value);
        myCounter = setInterval(() => {
            let i = mins * seconds
            if (i < 0) {
                console.log("Completed");
                clearInterval(myCounter)
            } else {
                let time = document.querySelector("#time");
                time.textContent = i--;
                console.log(time);
            }
        }, 1000);
    }
    
    timer()
})
