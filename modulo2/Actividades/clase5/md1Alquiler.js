function alquiler(tipo, dias, silla){
    let montoTipo;
    let montoSilla;
    let mensaje;
    let calculo;
    

    switch(tipo){
        case "compacto":
            montoTipo = 14000;
            break;
        case "mediano":
            montoTipo = 17000;
            break;
        case "camioneta":
            montoTipo = 28000;
            break;
    }
    
    if(silla == "si"){
        montoSilla = 1200
        mensajeSilla = `Con un adicional de servicio de silla. Valor $${montoSilla}`;
    } else {
        montoSilla = 0;
        mensajeSilla = " ";
    }

calculo = montoTipo*dias+montoSilla

mensaje = `Estimado cliente: En base al tipo de vehiculo alquilado: ${tipo}, y considerando los ${dias} dias utilizados, el monto total a pagar es de $${calculo}. 
${mensajeSilla}`

return mensaje
}

console.log(alquiler("MEDIANO".toLowerCase(), 2, "SI".toLowerCase()))
    
  
    //FUNCIONANDO