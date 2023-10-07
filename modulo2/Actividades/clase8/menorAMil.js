/*Resulta que cuando hay que presentar ganancias mayores a $ 1.000 no se presentan junto con 
las rendiciones que veníamos haciendo, por lo cual vamos a necesitar darle una vuelta de tuerca 
mas a nuestra función de Sumatorias. 

Escribí la función sumatoriaBajoImporte 
la cual recibiendo un array con importes nos devuelva el resultado final 
de la suma de los importes de todos los meses que tienen ganancia, 
a excepción de los que superen un importe de $ 1.000*/


let ganancias = [300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000];

function sumatoriaBajoImporte (montos){

let menoresDeMil = 0;
for(let i = 0; i < montos.length; i++){
    if(montos[i] < 1000 && montos[i] > 0){
        menoresDeMil += montos[i];
    }

}return menoresDeMil
}
console.log(sumatoriaBajoImporte(ganancias))

    //FUNCIONANDO