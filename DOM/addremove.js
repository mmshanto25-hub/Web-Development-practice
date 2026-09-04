const Framework = document.querySelector("#Lang");
const btnAdd = document.querySelector("#btnAdd");
const list = document.querySelector("#list");
const btnRemove = document.querySelector("#btnRemove");

btnAdd.onclick = (e) => {
    e.preventDefault();


    if (Framework.value == "") {
        console.log("please add an name");
    }


    const option = new Option(Framework.value);
    list.add(option);
    Framework.value = "";
}



btnRemove.onclick = (e) => {
    e.preventDefault();

    let NayArray = [];
    for (let i = 0; i < list.options.length; i++) {
        NayArray[i] = list.options[i].selected;
    }


    let index = list.options.length;

    while (index--) {
        if (NayArray[index]) {
            list.remove(index)
        }


    }
}