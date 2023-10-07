/*
5. Crear una función que reciba como parámetro un array de números positivos. Tendrá
la responsabilidad de retornar un nuevo array pero sólo con los valores pares.
Pista: Investiga sobre el uso del operador módulo. Recordemos también que un
número par es aquel que se puede dividir entre 2.
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function obtenerNumerosPares(array) {
    let numerosPares = [];
  
    for (let i = 0; i < array.length; i++) {

      if (array[i] % 2 === 0) {
        numerosPares.push(array[i]);
      }
    }return numerosPares;

}
  
obtenerNumerosPares(numeros);
console.log(obtenerNumerosPares(numeros))