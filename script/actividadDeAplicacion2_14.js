//Calcular la letra del DNI
// 06334923X

let numDni = Number(prompt("Introduce solamente el número de tu DNI")); 
let letras="TRWAGMYFPDXBNJZSQVHLCKE";
let calculo = numDni%23;

console.log(letras[calculo]);


