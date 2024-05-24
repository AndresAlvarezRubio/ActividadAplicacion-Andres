//Demostrar la diferencia entre var, let y cons

/*Variable que se puede modificar*/
let prueba1 = 5;
console.log(prueba1);
prueba1 = 2;
console.log(prueba1);

/*Variable que se puede modificar*/
var prueba2 = 6;
console.log(prueba2);
prueba2 = 3;
console.log(prueba2);


/*Constante que no se puede modificar*/
const PRUEBA3 = 7;
console.log(PRUEBA3);

/***************************************************************************/
//esta es la comprobación, pero rompe el programa, descomentar para comprobar
// PRUEBA3 = 4;
// console.log(PRUEBA3); 
/***************************************************************************/





for (let i = 0; i < 1; i++) {
    let hola = "soy el let";
    var variante = "soy la variante"
}
console.log(variante);
/***************************************************************************/
//esta es la comprobación, pero rompe el programa, descomentar para comprobar
// console.log(hola);
/***************************************************************************/


