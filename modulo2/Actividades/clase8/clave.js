let laClaveSecreta = ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"];
let ordenarClave = laClaveSecreta.reverse()

while(ordenarClave.includes("*")){
    ordenarClave[ordenarClave.indexOf("*")] = "";
}
    let claveDescubierta = ordenarClave.join("")
    console.log(claveDescubierta)


    let laClaveSecreta1 = [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"]

    function descubrirClave(clave){
    let ordenarClave = clave.reverse()

    while(ordenarClave.includes("*")){
        ordenarClave[ordenarClave.indexOf("*")] = "";
    }
    let claveDescubierta = ordenarClave.join("")
    return claveDescubierta 

} console.log(descubrirClave(laClaveSecreta1));

    //FUNCIONANDO