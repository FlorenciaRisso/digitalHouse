let objetos = ["Lapiz", "Goma", "Tijera", "Plasticola", "Regla"];
let comida = ["Fideos", "Milanesa", "Pizza", "Asado"];
let autos = ["Ford", "Chevrolet", "Volkswagen", "Fiat"];
let colores = ["Negro", "Blanco", "Rojo", "Verde"];


function miFuncion( param1, param2, ...otros){

    return otros;
}
console.log(miFuncion(objetos, comida, autos, colores))

console.log(" ")

function sumar (...numeros){
    return numeros.reduce((acum,num) => acum += num);
}
console.log(sumar(1,4));
console.log(sumar(1,4,275,345,56,23,876,23));