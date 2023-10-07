    //METODOS STRINGS

//  1. CONCATENAR STRINGS   (+)

function dominio(digital = "digital.com.ar"){
    let pag = "http://www."
    return pag + digital
    }
    console.log(dominio())

//

//  2. LONGITUD

let texto = "Florencia"

console.log(texto.length)

//

//  3. REEMPLAZAR TEXTO   .REPLACE()

function reemplazoFastFast(texto,palabra,reemplazo){
    return texto.replace(palabra,reemplazo)
}
console.log(reemplazoFastFast("Florencia Rosso", "Rosso", "Risso"))

//

//  4. BUSCAR EN EL TEXTO  .INDEXOF()

function menciona(texto, palabra){
    
    let recorte = texto.indexOf(palabra)
    return recorte > -1
    }
console.log(menciona("Florencia Risso", "Florencia"));

//

//  5. RECORTAR TEXTO  .SLICE

let frase = 'Hola!, soy Carli';
let licenciada = frase.slice(11,16)
console.log(licenciada)

//

//FUNCIONANDO