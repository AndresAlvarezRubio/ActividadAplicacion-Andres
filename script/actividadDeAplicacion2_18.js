//Idea un programa en el que usar un bucle "do while" sea mejor que un bucle "while"
let entradaCorrecta = true;

do {

    let numero1 = Number(prompt("Dime el valor de a:"))
    let numero2 = Number(prompt("Dime el valor de b:"))

    if (isNaN(numero1) || isNaN(numero2)) {
        
        alert("Un dato introducido no es valido");
        entradaCorrecta=false;

    } else {

        let resultado = numero1 + numero2;
        alert(resultado);
        entradaCorrecta = true;

    }

} while (!entradaCorrecta)