let div = document.createElement("div");
div.className = "ShantoClass"
div.id = "ShantoID"

// let text = document.createTextNode("create text into div")
// div.appendChild(text)


let h1 = document.createElement("h1");
h1.textContent = "inner h1 taq"
div.appendChild(h1)

document.body.appendChild(div)

let ul = document.createElement("ul");
ul.id = "menu";

let li1 = document.createElement("li");
li1.textContent = "say Home";
ul.appendChild(li1);

let li2 = document.createElement("li");
li2.textContent = "Say Nothing";
ul.appendChild(li2);

let li3 = document.createElement("li");
li3.textContent = "Say Something";
ul.appendChild(li3);


document.body.appendChild(ul)

let script = document.createElement("script");
script.src = "shanto.js"
document.body.appendChild(script)