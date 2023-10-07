/*
1.Invertir texto
Escribir el algoritmo de la función InvertirTexto que reciba una variable “oración” de
tipo cadena de caracteres (es decir texto) y que devuelva ese valor con los caracteres
del texto en orden inverso.
*/
console.log("EJERCICIO 1");

let miOracion = "cadena de texto"
function InvertirTexto(oracion) {
    let longitud = oracion.length;
    let oracionInvertida = "";

    for (let i = longitud -1; i >= 0; i--) {

    oracionInvertida += oracion[i];
    }

    return oracionInvertida;
    }console.log(InvertirTexto(miOracion))


/*
    2- Primera palabra
Escribir el algoritmo de la función “PrimeraPalabra” que reciba una variable “oración”
de tipo cadena de caracteres y que devuelva la primera palabra de dicha oración. Una
palabra es cualquier cadena de caracteres hasta un espacio (el espacio es un carácter, y
no es parte de la palabra).
*/
console.log(" ");
console.log("EJERCICIO 2");

let miOracion2 = "Cadena de texto";
function primeraPalabra (oracion){
    let palabras = oracion.split(" ")
    return palabras[0]
}console.log(primeraPalabra(miOracion2))



/*
3 - Última palabra
Escribir el algoritmo de la función “UltimaPalabra” que reciba una variable “oración”
de tipo cadena de caracteres y que devuelva la última palabra.*/

console.log(" ");
console.log("EJRCICIO 3");

let miOracion3 = "Cadena de texto";

function ultimaPalabra(oracion){
    let palabras = oracion.split(" ");
    let ultima = palabras[palabras.length -1];

    return ultima
}
console.log(ultimaPalabra(miOracion3))


/*4- Lista de palabras
Escribir el algoritmo de la función “Lista de palabras” que reciba una variable “oración”
de tipo cadena de caracteres y que devuelva una lista con cada una de las palabras.
Por ejemplo, dada la oración “esta es una frase muy interesante”, debería devolver la
lista: [“esta”,”es”,”una”,”frase”,”muy”,”interesante”]
¿Cómo cambiarías tu algoritmo si necesitamos solo la cantidad de palabras en la
oración?
*/

console.log(" ");
console.log("EJERCICIO 4")

let miOracion4 = "esta es una frase muy interesante";
function listaDePalabras(oracion){
    
    let palabras = oracion.split(" ")
    return palabras
} 
console.log(listaDePalabras(miOracion4))
console.log(listaDePalabras(miOracion4).length)


/*
5- Palabra más larga
Escribir el algoritmo de la función “PalabraMásLarga” que reciba una variable “oración”
de tipo cadena de caracteres y que devuelva la palabra más larga de la oración. Si dos
o más palabras comparten el tamaño máximo, devolver la última.
¿Cómo cambiarías tu algoritmo para que en el caso de haber muchas palabras del 
mismo tamaño en vez de devolver la última devuelva la primera?
*/

console.log(" ");
console.log("EJERCICIO 5");
let miOracion5 = "esta es una frase muy interesante";

function palabraMasLarga (oracion){
let palabras = oracion.split(" ");
    let palabraLarga = "";


    for( let i = 0; i < palabras.length ; i++){
        let palabraActual = palabras[i];

        if(palabraActual.length > palabraLarga.length){
        palabraLarga = palabraActual
    }
    }

    return palabraLarga;
}
console.log(palabraMasLarga(miOracion5))

    //FUNCIONANDO