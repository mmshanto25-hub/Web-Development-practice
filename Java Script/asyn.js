// console.log("Eshan")
// console.log("Ahmed")
// console.log("ahad")

let fun1 = () => {
    console.log("fun1");
}
let LoadingTime = () => {
    console.log("fun2");
}

let fun2 = () => {
    setTimeout(LoadingTime, 2000);
}
let fun3 = () => {
    console.log("fun3");
}
fun1()
fun2()
fun3()