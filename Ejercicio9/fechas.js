const fecha = new Date();

const fnacimiento = new Date(1984, 4, 3);

const esMasTarde = (fecha > fnacimiento);
console.log(esMasTarde);

const dia = fnacimiento.getDate();
const mes = fnacimiento.getMonth() + 1;
const anyo = fnacimiento.getFullYear();

