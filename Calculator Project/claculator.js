let display = document.getElementById("inputSection")
// console.log(display);
let buttons = document.querySelectorAll("button")
// console.log(buttons);
let arrayButton = Array.from(buttons)
// console.log(arrayButton);
let string = ""

arrayButton.forEach((btn)=>{
    btn.addEventListener("click", (event)=>{

        if (event.target.innerHTML == "Del" ) {
            string = string.substring(0, string.length-1)
            display.value = string
        
        } else if  (event.target.innerHTML == "C") {
            string = ""
            display.value = string
        } else if (event.target.innerHTML == "="){
            string = eval(string)
            display.value = string
        } 
        else{
            string+= event.target.innerHTML
            display.value = string
        }
        


        // console.log(event.target.innerHTML);
    })
})



// let input2 = document.querySelector("#inputEx")
// let button2 = document.querySelector("#btnEx")

// button2.addEventListener("click", ()=>{
//     let result2 = eval(input2.value)
//     document.getElementById("h2").innerHTML = result2
//     console.log(result2);
// })





// Explanation Array.from
// const str = "123456"
// const result = Array.from(str, x=> Number(x))


// console.log(typeof(result));
// console.log(result);

// const str2 = "Mohammed"
// const arrayStr2 = [...str2]
// console.log(arrayStr2);

// console.log(str2);
// const result2 = str2.split(str2)
// let space = ""
// console.log(result2.concat(space))

//Explanation of forEach loop

//let names = ["mohsin","hafeez", "azhar", "rizwan"]

// for (const element of names) {
//     console.log(element);
// }

// names.forEach((x)=>{
//     console.log(x);
// })

// names.forEach(any)
// function any(item) {
//     console.log(item);
// }


// Explanation of Eval

// console.log(eval("2 + 2"));
