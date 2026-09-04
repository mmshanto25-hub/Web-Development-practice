let id = document.querySelector("#Clicked")

id.onclick = function () {
    alert("Thios message is for Dom 0 level handler")
}



let dom2 = document.querySelector("#DOM2")

dom2.addEventListener("click", function () {
    alert("DOM level 2 handler")
})