const btn = document.querySelector(#btn);
let checkbox = document.querySelectorAll("input[name='color']:checked");

let values = [];

btn.addEventListener("click", (e) => {
    let checkbox = document.querySelectorAll("input[name='color']:checked");

    let values = [];
    checkbox.forEach((checkbox) => {
        values.push(checkbox.value);
    });

    console.log(values)
})