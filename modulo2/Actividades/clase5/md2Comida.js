let hamburguesa = (tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla) => {
let montoTotal = 0

switch(tipoDeHamburguesa){
    case "Carne a la Parrilla":
        montoTotal = 1800;
        break;
    case "Pollo":
        montoTotal = 1500;
        break;
    case "Vegetariana":
        montoTotal = 1200;
        break;
    default:
        console.log("Ingrese una hamburguesa existente")
    }

    if(jamon) montoTotal += 30;
    if(queso) montoTotal += 25;
    if(salsaDeTomate) montoTotal += 5;
    if(mayonesa) montoTotal += 5;
    if(mostaza) montoTotal += 5;
    if(tomate) montoTotal += 15;
    if(lechuga) montoTotal += 10;
    if(cebolla) montoTotal += 10;

    return montoTotal;
} 

function pedido(nombre, hamburguesa){
    let mensaje = `Cliente ${nombre}: Su monto a pagar es de $${hamburguesa}.`;
    return mensaje;
}
console.log(pedido("Flor", hamburguesa("Vegetariana", true, true, true, true, true, true, true, true)));

    //FUNCIONANDO