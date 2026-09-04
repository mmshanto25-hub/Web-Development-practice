document.querySelector("#menu");
let lang = ['python', 'java', 'javascript', 'PHP', 'Go', 'Pyscript'];

let fragment = document.createDocumentFragment();


lang.forEach((Language) => {
    let li = document.createElement("li");
    li.textContent = Language;
    fragment.appendChild(li)
})

menu.appendChild(fragment)







document.querySelector("#ok")
let name = ['Shanto', 'MAhfuz', 'Tamim', 'RAkib', 'Mihad', 'bayazid']

let accha = document.createDocumentFragment();

name.forEach((element) => {
    let li = document.createElement("li");
    li.textContent = element;
    accha.appendChild(li)
});
ok.appendChild(accha)