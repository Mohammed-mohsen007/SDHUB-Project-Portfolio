const inputBox = document.querySelector("#inputBox")
const listContainer = document.querySelector("#listContainer")

const btnAdd = document.querySelector("#btn")

function addTask() {
    btnAdd.addEventListener("click",()=>{
        if (inputBox.value === "") {
            alert("write something")
        } else {
            let list = document.createElement("li");
            list.innerHTML = inputBox.value;
            listContainer.appendChild(list)
            let span = document.createElement("span")
            span.innerHTML = "Delete"
            list.appendChild(span).classList.add("pl-20", "cursor-pointer")
        } inputBox.value = ""
            saveData()
    })

    listContainer.addEventListener("click", (e)=>{
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked")
            saveData()
        } else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData()
        } 
    },false)
}

addTask()

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()