let menu = document.querySelector("#menu")

let li = document.createElement("li");
li.textContent = "home";

menu.insertBefore(li, menu.firstElementChild)