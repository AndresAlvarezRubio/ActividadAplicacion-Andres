//Elabora una calculadora, que pida primero un número, luego que pida el símbolo y por último que pida el otro número. Se muestra por consola el resultado de la operacion

let num1 = Number(prompt("Introduce un número: "));
let calculo = prompt("¿Qué cálculo es? Elige una opción de las siguientes: +, -, *, /, **, %");
let num2 = Number(prompt("Introduce otro número: "));

switch (calculo) {
    case "+":
        console.log(`${num1+num2}`);
        break;
    case "-":
        console.log(`${num1-num2}`);
        break;
    case "*":
        console.log(`${num1*num2}`);
        break;
    case "/":
        console.log(`${num1/num2}`);
        break;
    case "**":
        console.log(`${num1**num2}`);
        break;
    case "%":
        console.log(`${num1%num2}`);
        break;
}