//Conversor de tiempo a segundos

let dias = Number(prompt("Introduzca número de días"));
let horas = Number(prompt("Introduzca número de horas"));
let minutos = Number(prompt("Introduzca número de minutos"));

let sumaTotal = (dias*86400)+(horas*3600)+(minutos*60);

console.log(`${sumaTotal}`);