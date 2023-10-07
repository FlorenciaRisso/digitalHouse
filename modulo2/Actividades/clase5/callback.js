//DOBLE O TRIPLE

function doble(numero) {
    return numero * 2
}
function triple(numero) {
    return numero * 3
}
function aplicarCallback(numero, callback) {
    return callback(numero)
}
console.log(aplicarCallback(5,triple))

//

//CALCULADORA

let suma = (numero1, numero2) => numero1 + numero2
let resta = (numero1, numero2) => numero1 - numero2
let multiplicacion = (numero1, numero2) => numero1 * numero2
let division = (numero1, numero2) => numero1 / numero2

let calculadora = (numero1, numero2, operacion) => operacion (numero1, numero2)

console.log(calculadora(2,3,multiplicacion()))