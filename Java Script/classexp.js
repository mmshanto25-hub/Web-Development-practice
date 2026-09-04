let Person = class {
    constructor(name, age, profe) {
        this.name = name;
        this.age = age;
        this.profe = profe;
    }
}
let NewPerson = new Person("Shanto Bhaiyaah", 18, "Developer");
console.log(NewPerson.age)