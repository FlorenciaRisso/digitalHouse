let palabra = "Perro"
let traduccion;

switch (palabra){
    case "Perro":
        traduccion = "Dog"
        break;
    case "Gato":
        traduccion = "Cat";
        break;
    case "Puerta":
        traduccion = "Door"
        break;
    case "Ventana":
        traduccion = ("Window")
        break;
    case "Mesa":
        traduccion = ("Table");
        break;
    default:
        traduccion = ("La palabra ingresada es incorrecta")
}
console.log(traduccion)

//FUNCIONANDO