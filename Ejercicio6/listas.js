//Ejercicio-6

const compra = ["harina", "sal", "azucar", "fideo", "arroz"]

//add "Aceite de Girasol"
compra.push("Aceite de Girasol")

console.log(compra)
// eliminando "Aceite de Girasol"
compra.pop()
console.log(compra)

const peliculas = [
    {titulo: "Terminator", director: "James Cameron", fecha: new Date (1984)},
    {titulo: "Rambo", director: "Ted Kotcheff", fecha: new Date(1982, 22, 9)},
    {titulo: "Salvar al soldado Ryan", director: "Steven Spielberg", fecha: new Date(6, 24, 1998)}
]

const peliculas_2010 = peliculas.filter(pelicula => pelicula.fecha > new Date (2010, 0, 1));
console.log(peliculas_2010)

const directores = peliculas.map(pelicula => {
    return pelicula.director})

console.log(directores)

const titulos = peliculas.map(pelicula => {
    return pelicula.titulo})

console.log(titulos)

const dirTitulos = directores.concat(titulos);
console.log(dirTitulos)

const direcTitulos_pro = [...directores, ...titulos] 
console.log(direcTitulos_pro)