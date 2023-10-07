/*
1. Crear una función encontrar el número, que reciba por parámetros un array de
números y un número. La función deberá evaluar si el número proporcionado existe o
no en el array. De existir debe devolver el mensaje “El número XX sí existe en el
array”. En el caso contrario debe mostrar el mensaje: “El valor solicitado no existe”.*/


let miArray = [50,51,52,53,54,55,56,57,58,59];

function encontrarNumero (array, numero){
    
    if(array.includes(numero)){
        return `El número ${numero} sí existe en el array`
    } else {
        return "El valor solicitado no existe"
    }
}   console.log(encontrarNumero(miArray, 55))


/*
2. Crear una función Juego de trompito, que reciba dos parámetros:
a. El primero, un array con las siguientes cadenas de texto: “Toma 1” ,”Toma 2”,
“Pon 1”, “Pon 2”, “Todos ponen”, “Toma todo”
b. El segundo parámetro será la cantidad de vueltas del trompito comprendidas
entre 2 y 6.
La función tendrá como responsabilidad generar un número aleatorio comprendido
entre 0 y 5. En función del resultado obtenido, se le debe devolver al usuario alguno de
los mensajes suministrados por el trompito. Por ejemplo: “Toma todo”.
Pista: investigar sobre las funcionesMath.random() y Math.floor().*/


let mensajesTrompito = ["Toma 1", "Toma 2", "Pon 1", "Pon 2", "Todos ponen", "Toma todo"];

function juegoDeTrompito(mensajes, vueltas) {

    if (vueltas < 2 || vueltas > 6) {
        return "El número de vueltas debe estar entre 2 y 6.";
    }

    let numeroAleatorio = Math.floor(Math.random() * 6);
    let mensajeSeleccionado = mensajes[numeroAleatorio];

    return mensajeSeleccionado;
}

console.log(juegoDeTrompito(mensajesTrompito,4));



/*
3. Crear una función sumatoria de pares e impares, que recibirá por parámetros un
array con diez valores numéricos. La función tendrá la responsabilidad de devolver al
usuario la sumatoria total de los números pares y de los números impares.
Pista: investigar sobre el operador módulo
*/

miArray = [10,11,12,13,14,15,16,17,18,19];

function sumatoria (array){

let sumaPares = 0;
let sumaImpares = 0;
let resultadoPares;
let resultadoImpares;
let resultado; 

for(let i = 0; i<array.length; i++){

    if(array[i] % 2 === 0){
    resultadoPares = sumaPares += array[i];
} else{
    resultadoImpares = sumaImpares += array[i];
}

    resultado = `Sumatoria números pares: ${resultadoPares}, Sumatoria números impares: ${resultadoImpares}`

}return {resultado}

}console.log(sumatoria(miArray))

    //FUNCIONANDO


