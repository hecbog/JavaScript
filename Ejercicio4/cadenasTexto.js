let nombre = "Hector"
let apellido = "Bogarin"
let estudiante = (nombre.concat(" ", apellido))
let estudianteMays = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()

let letrasEstudiante = estudiante.length
let priLetraNombre = nombre[0];
let uLetraApellido = apellido[6]

let estSinEspacios = estudiante.replace(/ /g,'')
let contiene = estudiante.includes("Hector")
console.log(contiene)

console.log(estudiante);
console.log(estudianteMays);
console.log(estudianteMinus);
console.log(letrasEstudiante);
console.log(priLetraNombre);
console.log(uLetraApellido);
console.log(estSinEspacios);