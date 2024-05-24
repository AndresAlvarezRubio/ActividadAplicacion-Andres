//Pedir número y mostrar su factorial

let numeroDelUsuario = Number(prompt("Introduce un número"));
let resFinal = numeroDelUsuario;

for (let i = numeroDelUsuario; i > 1; i--) {
    resFinal*=(i-1);
}
console.log(resFinal);