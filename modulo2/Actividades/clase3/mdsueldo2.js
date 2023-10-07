let nombre = "Juan";
let apellido = "Paz";
let sueldoActual = 75000;
let porcentajeAumento = 20;
let calculoAumento = sueldoActual * porcentajeAumento / 100;
let nuevoSueldo = sueldoActual + calculoAumento;

let mensaje = `Hola, estimado ${nombre} ${apellido}. En base a su sueldo actual: $${sueldoActual}. 
Ha recibido un aumento del ${porcentajeAumento}%: ${calculoAumento}.
Y su nuevo sueldo es de: ${nuevoSueldo}`

console.log(mensaje)

//FUNCIONANDO