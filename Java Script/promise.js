let message = true;
let promise = new Promise((reslove, reject) => {
    if (message) {
        reslove([
            { username: "Shanto", email: "mmshanto25@gmai.com" },
            { username: "tutul", email: "mmrthgddnto25@gmai.com" }
        ])
    }
    else {
        reject("user is not valid bro");
    }
})
promise.then((s) => {
    console.log(s)
})
promise.catch(() => {
    console.log(error)
})

