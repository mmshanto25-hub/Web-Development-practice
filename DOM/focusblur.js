let myInput = document.querySelector("#myInput")

// myInput.addEventListener("focus", (e) => {
//     // console.log("focused")
//     e.target.style.backgroundColor = "red"
//     // let newTarget = e.target.className = "myClass"
//     // console.log(newTarget)
// })


myInput.addEventListener("focus", (e) => {
    e.target.style.backgroundColor = "yellow"
    e.target.style.color = "black"
})


myInput.addEventListener("blur", (e) => {
    e.target.style.backgroundColor = "red"
    e.target.style.color = "green"
})