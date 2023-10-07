/*El Tech Leader de la empresa DH-Movies requiere conocer la estructura de datos del nuevo
proyecto, para ello debes tener presente lo siguiente:

1. Crear una estructura para almacenar un conjunto de películas, tales como: ‘Turno de
día’, ‘30 noches con mi ex’, ‘Bestia’, ‘El monte’, ‘Top gun maverick',
‘Elvis’,‘Thor: amor y trueno’.

2. Más tarde desde la producción indicaron que la película más vendida era: ‘Thor:
amor y trueno’. Por lo tanto, en la estructura creada querían ver primero dicha
película y con letras en mayúsculas. Para ello el tech leader, te solicita que crees
una función, la cual recibirá por parámetro la película indicada y deberá retornar la
misma pero en mayúscula. Para ello sería bueno que investigues sobre el método
.toUpperCase(). Con ese valor recibido, deberás colocarla primera en la estructura
creada.

● Una vez terminada la actividad, nos indican que debemos crear una cadena de texto
para las siguientes películas próximas a estrenar:
○ Counter-Strike
○ NOP
○ Vértigo
○ Nick
○ Avatar.

Nos piden crear una estructura parecida a la trabajada en el punto 2, teniendo en
cuenta que cada elemento debe estar separado por una coma.

● Una vez creada la estructura, una de las programadoras del equipo indica que la
primera película incorporada a la estructura no es una película sino un video juego.
Por tal motivo, te encomiendan la tarea de excluir dicho elemento de la estructura.

3. Finalmente, el Tech Leader te solicita crear una función que reciba por parámetro
ambas estructuras creadas y debe devolver un nueva nueva estructura con todas las películas, 
para ello te recomendamos que investigues lo que hace el método .concat().*/


let peliculas = ["Turno de dia", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis","Thor. amor y trueno2"];
console.log(peliculas)

let thor = peliculas.pop()
console.log(thor)

let thorMayuscula;
function mayuscula (thor) {
    thorMayuscula = thor.toUpperCase()
    return thorMayuscula
}
console.log(mayuscula("Thor, amor y trueno2"))


let listaNueva = peliculas.unshift(thorMayuscula)

console.log(peliculas)

let proximoAExtrenar = ["Counter-Strike",
    "NOP",
    "Vértigo",
    "Nick",
    "Avatar"]

let listaSinVJ = proximoAExtrenar.shift(proximoAExtrenar[0]);
console.log(proximoAExtrenar)

let listaFinal;
function unirPeliculas(array1,array2){
    listaFinal = array1.concat(array2)
    return listaFinal
}
console.log(unirPeliculas(peliculas, proximoAExtrenar))

    //FUNCIONANDO