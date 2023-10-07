let perfil = "asistente"
let mensaje;

if(perfil == "administrador" || perfil == "ADMINISTRADOR" || perfil == "Administrador"){
    mensaje = "Usted tiene todos los privilegios de uso del sistema."

}else if(perfil == "asistente" || perfil == "ASISTENTE" || perfil == "Asistente"){
    mensaje = "Usted sólo tiene permisos de registrar, modificar y consultar datos."

}else if(perfil == "invitado" || perfil == "INVITADO" || perfil == "Invitado"){
    mensaje = "Usted sólo tiene permisos de consultar datos."

}else if(perfil == "") {
    mensaje = "Debe especificar el perfil del usuario."

}else {
    mensaje = "Debe especificar un perfil válido."
}
console.log(mensaje)

//FUNCIONANDO