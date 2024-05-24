//Muestra un programa que muestre los número impares del 1 al 100, exceptuando los que son divisibles entre 3 y entre 7 -> Se necesita una versión con "do while", otra con "while" y otra más con "for".



/**********************/
/*Bucle con "Do While"*/
/**********************/

// let contador = 0;

// do {
    
//     if (contador%2!=0 && contador%3!=0 && contador%7!=0) {

//         console.log(`Número -> ${contador}`);

//     }

//     contador++;

// } while (contador < 100);







// /**********************/
// /*Bucle con "While"*/
// /**********************/

// let contadorW = 0;

    
// while (contadorW < 100){

//     if (contadorW%2!=0 && contadorW%3!=0 && contadorW%7!=0) {
        
//         console.log(`Número -> ${contadorW}`);
        
//     }
    
//     contadorW++;
// }







/**********************/
/*Bucle con "For"*/
/**********************/

let contadorF = 0;

for (let i = 0; i < 100; i++) {
    
    if (contadorF%2!=0 && contadorF%3!=0 && contadorF%7!=0) {
        
        console.log(`Número -> ${contadorF}`);
        
    }
    
    contadorF++;
    
}