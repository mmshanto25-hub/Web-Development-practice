let Display = (something) => {
    console.log(something)
}


let HigherOrderFun = (Name, Class, callBackFun) => {
    const details = `My name is ${Name} & i read in class ${Class}`;
    callBackFun(details)

}
HigherOrderFun("Eshan", "11", Display)