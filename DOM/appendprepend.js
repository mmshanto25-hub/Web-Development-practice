let app = document.querySelector("#app")

let names = ["Shanto", "Eshan", "Ahad", "roton"]

let DOMScript = names.map((names) => {
    let li = document.createElement("li");
    li.textContent = names;
    return li;
})

app.append(...DOMScript)


let fruit = document.querySelector("#fruit");
let fruits = ["banana", "vegetable", "jackfruit", "lichu"]


let Fruites = fruits.map((namess) => {
    let li = document.createElement("li");
    li.innerHTML = namess;
    return li;
})
fruit.prepend(...Fruites)