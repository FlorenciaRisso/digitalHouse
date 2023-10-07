/*
1. Crear una función que recibe un string en minúscula, lo convierte a mayúsculas
y lo retorna. Investiga qué hace el método de strings .toUpperCase()
2. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
parámetro. Investiga qué hace la palabra reservada typeof().
3. Crear una función que calcule la edad de los perros, considerando que 1 año para
nosotros son 7 de ellos.
4. Crear una función que calcule el valor de una hora de trabajo, teniendo en cuenta que
dicha función recibe tres parámetros: El salario mensual, la cantidad de días
trabajados y la cantidad de horas que regularmente trabajada por día.*/


//  MAYÚSCULA 

function mayuscula(palabra){
return palabra.toUpperCase()
}
console.log(mayuscula("florencia"));


//  TYPEOF

function tipoDeDato(dato1, dato2, dato3){
    return `Nombre(tipo de dato): ${typeof(dato1)}.
Edad(tipo de dato): ${typeof(dato2)} 
Estudiante(tipo de dato): ${typeof(dato3)}`
}
   console.log(tipoDeDato("Florencia", 26, true))


//  EDAD PERROS

let edadPerro;
function edadPerros(edad){
    edadPerro = edad * 7
    return `La edad del perro es ${edadPerro}`
}
console.log(edadPerros(5))


//  HORA DE TRABAJO

let horaDeTrabajo;
function valorDeHoraDeTrabajo(salarioMensual, diasTrabajados, horasDiarias){
    horaDeTrabajo = (salarioMensual / diasTrabajados) / horasDiarias
    return horaDeTrabajo
}
console.log(valorDeHoraDeTrabajo(50000, 25, 8))


    //FUNCIONANDO