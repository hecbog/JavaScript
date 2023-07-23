const obj = {
    nombre : "Hector",
    apellido : "Bogarin",
    edad : 39,
    altura : 1.74,
    eresDesarrollador : true
}

const edad = obj.edad;

const lista = [{
    ...obj}, {
    nombre : "Walter",
    apellido : "Garcia",
    edad : 38,
    altura : 1.69,
    eresDesarrollador : false
},
{   nombre : "Julio",
    apellido : "Baez",
    edad : 45,
    altura : 1.82,
    eresDesarrollador : false
}
]

const lista2 = lista.sort((a, b) => b.edad - a.edad )

console.log(edad)
console.log(lista2)