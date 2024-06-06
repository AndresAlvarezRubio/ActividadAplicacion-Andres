/* Escribe un programa que ponga en práctica la siguiente lógica:
    
    - Mostrará el siguiente menú y el usuario deberá elegir una de las opciones:
        A) Área del triángulo(b*h/2).
        B) Área del rectángulo(b*h).
        C) Área del círculo(π*r**2).
        D) Salir.
    - En función de la opción que elija el usuario, se le pedirán los datos necesarios en cada caso
    - El programa calculará el resultado y lo mostrará en la consola.
    - La lógica anterior se repetirá indefinidamente hasta que el usuario pulse la tecla de salir
*/

let respuestaUser= "";
let num1 = 0, num2 = 0, calculo = 0;


do {
    respuestaUser = prompt("Introduzca que quiere hacer: \n      A) Área del triángulo \n      B) Área del rectángulo \n      C) Área del círculo \n      D) Salir").toUpperCase();
    
    switch (respuestaUser) {
        
        case "A": 

            num1 = Number(prompt("Introduce la base del Triángulo"));                    
            num2 = Number(prompt("Introduce la altura del Triángulo"));

            if (!isNaN(num1) || !isNaN(num2)) {
                
                calculo = (num1*num2/2)
                console.log(calculo);
                break;
                
            }  else if (isNaN(num1) || isNaN(num2)) {

                console.log("Prueba 2");
                console.log("No se ha introducido un número");
                break;
            }
            
        case "B": 
            
            num1 = Number(prompt("Introduce la base del Rectángulo"));                    
            num2 = Number(prompt("Introduce la altura del Rectángulo"));

            if (!isNaN(num1) || !isNaN(num2)) {

                calculo = (num1*num2)
                console.log(calculo);
                break; 

            } else if (isNaN(num1) || isNaN(num2)){

                console.log("No se ha introducido un número");
                break;
            }

        case "C": 

            num1 = Number(prompt("Introduce el radio del Círculo"));         
            
            if (!isNaN(num1)) {
                
                calculo = Math.PI*(num1**2);
                console.log(calculo);
                break;

            }  else if (isNaN(num1)) {

                console.log("No se ha introducido un número");
                break;
            }
            
        case "D":
                break;
                
        default:
            console.log("Inputs invalidos");

    }


} while (respuestaUser != "D");