
/*Cada vez que queremos ir al cine, además de ver si nuestra película está en cartelera, 
debemos verificar si el asiento que buscamos está disponible. Como la cadena de cines DigitalMovies sabe ésto nos está pidiendo una ayuda.

Nos piden que escribamos la función asientosDisponibles(), que tome como parámetro un conjunto de asientos disponibles 
y el asiento que quiere ocupar la persona. Nuestra función deberá verificar si el asiento solicitado se encuentra disponible 
y devolverle un mensaje claro y prolijo al cliente como en los ejemplos siguientes:

Ejemplo si se encuentra el asiento disponible
asientosDisponibles([15, 28, 44, 45, 70], 15);  
// El resultado debería ser:
"Felicitaciones, el asiento número 15 está disponible"+

Ejemplo si no se encuentra el asiento disponible
asientosDisponibles([15, 28, 44, 45, 70], 50);  
// El resultado debería ser:
"Lo sentimos, el asiento número 50 está ocupado, pero aún quedan 5 asientos disponibles"*/

function asientoDisponible(numAsientos, asientoABuscar){

    let existe = numAsientos.includes(asientoABuscar)
    let mensaje;
    let asientosLibres = numAsientos.length
    if(existe == true){
        mensaje = `Felicitaciones, el asiento número ${asientoABuscar} está disponible`
    }else{
        mensaje = `Lo sentimos, el asiento número ${asientoABuscar} está ocupado, pero aún quedan ${asientosLibres} asientos disponibles`
    }
return mensaje
}
console.log(asientoDisponible([15, 28, 44, 45, 70], 15))
console.log(asientoDisponible([15, 28, 44, 45, 70], 50))

    //FUNCIONANDO
