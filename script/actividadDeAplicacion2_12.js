//Crea un programa que calcule operaciones de segundo grado

let a= Number(prompt("Valor de a"));
let b= Number(prompt("Valor de b"));
let c= Number(prompt("Valor de c"));

let formulaPositivo = ((b*-1)+Math.sqrt((b**2)-(4*a*c)))/2*a;
let formulaNegativo = ((b*-1)-Math.sqrt((b**2)-(4*a*c)))/2*a;

console.log(formulaNegativo);
console.log(formulaPositivo);



//Me rindo, tiene muchas cosas y ya no estoy para pensar jajaja