function fun1 () {
    return true
}

async function promesa() {
    return setTimeout(() => console.log("Hola soy unaa promesa"), 5000)
}


function* indicesPares() {
    let id = 0
    while(true) {
        yield id += 2
    }
}
indicesPares();
console.log(promesa())
const gen = indicesPares();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
