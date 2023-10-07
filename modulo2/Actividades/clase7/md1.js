/*El Tech Leader nos informa que debemos efectuar un código que permita calcular el saldo
de la cuenta de un cliente de la Institución Financiera. Tu responsabilidad será ir
ejecutando cada una de las siguientes consignas para lograr el objetivo:

1. Crear un array que contenga las operaciones bancarias realizadas por el cliente,
tomando en cuenta que los depósitos serán representados por valores positivos y
los retiros por valores negativos.

2. Crear una función (Callback) que reciba como parámetro el array creado. La función
tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo
actual de retiros y el saldo actual del cliente.

3. Crear otra función que reciba como parámetros el nombre y el apellido del cliente así
como el array que contiene las operaciones bancarias. Esta función tendrá la
responsabilidad de retornar el nombre y apellido del cliente y el saldo total de
depósitos, el saldo actual de retiros y el saldo actual.
Una vez creado el programa, ejecutalo y para verificar los resultados solicitados, invoca a la
segunda función, asigna diferentes valores o argumentos. No olvides utilizar el console.log()
para mostrar los resultados al usuario, de acuerdo al siguiente mensaje:*/

// saldo total de depósitos, el saldo actual de retiros y el saldo actual del cliente


let cuenta = [500, 1000, -200, 600, -800];

function depositosTotal(arrayCuenta){
let depositos = 0;
let retiros = 0;
let saldoActual = 0;

for (let i = 0; i < arrayCuenta.length; i++) {
  let operacion = arrayCuenta[i]
  if(operacion > 0) {
  depositos += operacion
} else {
  retiros += operacion
}
}
saldoActual = depositos + retiros
return `El monto total de los depósitos es de: $${depositos}.
El monto total de los retiros es de: $${retiros}.
Por lo tanto, su saldo actual en la cuenta es de: $${saldoActual}`
}


function datos (nombre, apellido, array){

  return `Estimada ${nombre} ${apellido}: 
${array}`
}
  console.log(datos("Gloria","Medina",depositosTotal(cuenta)))

    //FUNCIONANDO