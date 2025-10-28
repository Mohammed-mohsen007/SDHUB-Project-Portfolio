// fetch("https://dummyjson.com/products").then((response)=>{
//         return response.json()
//     }).then((data)=>{
//         console.log(data);
//     })

// fetch("https://dummyjson.com/products").then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log(data);
// })

// fetch("https://dummyjson.com/products").then((r)=>{
//     return r.json()
// }).then((data)=>{
//     console.log(data);
// })

// fetch("https://dummyjson.com/products")
// .then((res)=> res.json())
// .then((data)=> console.log(data))


// fetch("https://dummyjson.com/products", {
//     method: 'GET'
// })

// .then((res)=> res.json())
// .then((data)=> console.log(data))
// .catch((error) =>{
//     console.log(error);
// })

// fetch('https://dummyjson.com/products/add', {
//     method: 'POST',
//     //headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         title: 'BMW Pencil',
//         category: 'Stationary'
//         /* other product data */
//     })
// })
//     .then(res => res.json())
//     .then(console.log)
//     .catch((err) => {
//         console.log(err);
//     })

// async function makeRequest(){
//     return "Hello"
// }

// function hi() {
//     console.log("Hello");

//     // throw new Error("error in function")
//     throw "Error in Program"
//     console.log("hii");
// }

// async function makeRequest() {
//     throw new Error("Error in programming")
// }

// async function makeRequest() {
//     const url = "https://dummyjson.com/products/1"
//     const responsePromise = await fetch(url) //single line way //await (await( fetch(url))).json()
//     const data = await responsePromise.json()
//     console.log(data);
// }

// makeRequest()

// we can use await without async function through type="module"
// const url = "https://dummyjson.com/products/1"
//     const responsePromise = await fetch(url) //single line way //await (await( fetch(url))).json()
//     const data = await responsePromise.json()
//     console.log(data);

// try and catch

//this will give error and will not run the code
// console.log(a);
// console.log(3 + 7);

// using try and catch we can run the code

// try {
//     console.log(a);
// } catch (error) {
//     console.dir(error.message); // this is for dev understanding what error is coming
// }
// console.log(3+7);

// const user = {
//     name: "Mohsin",
//     age: "25"
// }
// console.log(user.address.city);

// try {
//     console.log(user.address.city);
// } catch (error) {
//     console.dir(error)
// } finally{
//     console.log("hello world");
// }

// console.log(3 + 7);

// async function makeAsyncRequest() {
//     try {
//     const url = "https://dummyjso.com/products/1"
//     const responsePromise = await fetch(url) //single line way //await (await( fetch(url))).json()
//     const data = await responsePromise.json()
//     console.log(data);
//     return data
//     } catch (error) {
//         console.log(alert("error"));
//     }
// }
// makeAsyncRequest()


async function makeAsyncRequest() {
    try {
        const url = "https://dummyjson.com/products"
        let a = await (await fetch(url)).json()

        for (const element of a.products) {
            let div = document.createElement("div")
            let heading = document.createElement("h1")
            let paragraph = document.createElement("p")
            let image = document.createElement("img")
            let lineBreak = document.createElement("p")
            
            heading.textContent = element.title
            lineBreak.textContent = element.lineBreak
            paragraph.textContent = element.description
            image.textContent = element.images

            div.appendChild(lineBreak).classList.add("border-2", "border-indigo-600")
            div.appendChild(heading)
            div.appendChild(paragraph)
            div.appendChild(image).setAttribute("src", element.images[0])

            document.getElementById("container").appendChild(div)
            
        }
        
        
    } catch (error) {
        console.log(alert("API Error"));
    }}

makeAsyncRequest()