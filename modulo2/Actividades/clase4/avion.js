function aterrizaje(velocidad, altura){

let velocidadLista = velocidad >= 268 && velocidad <= 278 ? true : false
let alturaLista = altura >= 150 && altura <= 300 ? true : false
    
    if(alturaLista && velocidadLista){
        console.log("Avión listo para aterrizar")
    } else (
        console.log("Avión no listo para aterrizar")
    )

}aterrizaje(268,200)

//FUNCIONANDO

//SEGUNDA SOLUCION

let velocidadReal=150;
let velocidadMinima=268;
let velocidadMaximal=278;
let alturaReal=160;
let alturaMinima=150;
let alturaMaxima=300;

let aterriza= ((velocidadReal>velocidadMinima && velocidadReal<velocidadMaximal) && (alturaReal>alturaMinima && alturaReal<alturaMaxima)) ? "Permiso para aterrizar" : "No puede aterrizar";
console.log(aterriza);