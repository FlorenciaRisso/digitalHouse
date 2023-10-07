let electrodomésticos = ["tele", "radio", "computadora", "plancha", "tostadora", "aire"]


//1. Acceder de manera arbitraria a diferentes elementos del array. Recuerda mostrar por
// la consola los resultados.

console.log(electrodomésticos[2])
console.log(electrodomésticos[5])
console.log(electrodomésticos[1])



//2 Extraer el primer elemento del array y agregarlo al final del mismo.

let primero = electrodomésticos.shift()
console.log(primero)

electrodomésticos.push(primero)
console.log(electrodomésticos)



// 3 Agregar al final del array dos (2) nuevos productos.

electrodomésticos.push("parlante", "heladera")
console.log(electrodomésticos)



// 4 Mostrar por la consola la cantidad de elementos que contiene el array.

console.log("Cantidad de elementos que contiene el array " + electrodomésticos.length)



// 5 Buscar un elemento del array y crear una condición responsable de establecer si
// existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje:
// “Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
// no existe”.

if(electrodomésticos.includes("telefono")){
    console.log("Producto encontrado")
} else{
    console.log("El producto buscado no existe")
}



// 6 Unificar todos los elementos del array en una cadena de texto (string), separando los
// elementos por espacios en blanco.

let nuevaFrase = electrodomésticos.join(" ")
console.log(nuevaFrase)




// 7 Determinar la cantidad de elementos que posee la cadena de texto obtenida.

console.log(nuevaFrase.length)



// 8 Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la
// función adecuada para ello.

let reemplazo = nuevaFrase.replace("aire", "ventilador")
console.log(reemplazo)

// 9 Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
// de la cadena de texto. Tener en cuenta que los elementos

console.log(nuevaFrase.split(" "))


    //FUNCIONANDO