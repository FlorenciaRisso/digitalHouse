/*Realizar una función llamada imprimirAzul4 que muestre por consola 4 veces la palabra Azul. 
NO te pedimos que ejecutes la función, por lo cual no deberías hacerlo 😉*/

/*function imprimirAzul4(){

    for ( let i = 0 ; i < 4; i ++){
        return "Azul"
    };
    }console.log(imprimirAzul4())*/



console.log(" ");
/*Escribí una función llamada pasandoPorI (la última letra es una i latina mayúscula) que muestre por consola 
"acá i tiene el valor de x" donde x va a ser el valor de la variable i en cada iteración, por cada valor que va tomando i desde 0 hasta el numero 4 inclusive.*/

/*function pasandoPorI() {
        for (let i = 0 ; i < 5; i++) {

            console.log("acá i tiene el valor de: " + i)
    }
    }pasandoPorI()*/

//
console.log(" ")

/*En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X por parámetro y cuenta la cantidad 
de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for.
Ejemplo de cómo se usaría esta función (ustedes solo deben concentrarse en su implementación):
console.log(noParesDeContarImparesHasta(4))
imprime por pantalla el valor 2, que se obtiene de contar 1 y 3.*/


function noParesDeContarImparesHasta(numero) {
    let conteo = 0
    
    for (let i=0 ; i <= numero ; i++ ) {
        if((i % 2) !== 0 ){
            conteo ;
        }
    }
    return conteo;
    }
    console.log(noParesDeContarImparesHasta(15))

 