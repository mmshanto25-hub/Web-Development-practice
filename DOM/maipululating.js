// let div = document.createElement("div")
// div.id = "Menu"
// let p = document.createElement("p")
// let p2 = document.createElement("p")

const { createElement } = require("react");


// p.innerHTML = "p tag"
// p2.innerHTML = "p tag abar"

// div.appendChild(p)
// div.appendChild(p2)

// document.body.appendChild(div)


let menu = document.querySelector("#menu");

function CreateMenu(name) {
    let li = createElement("li");
    li.textContent = name;
    return li;
}
menu.appendChild(CreateMenu("Eshan"));
menu.appendChild(CreateMenu("Ahmed"));
menu.appendChild(CreateMenu("Ahad"));