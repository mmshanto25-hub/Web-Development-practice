let hablu = [2, 5, 16, 56]
let hablu1 = hablu.filter(Myfun)

function Myfun(x) {
    return x > 55
}
console.log(hablu1)