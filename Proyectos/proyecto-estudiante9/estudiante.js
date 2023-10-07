let estudiante = {
    nombre: "Elias",
    apellido:"Orellana",
    edad:"21",
    hobbie:"Programar",
    decirHobbie: function(){
        return `Hola. Mi hobbie es ${this.hobbie}`
    },
    decirNombre: function(mensaje){
        return `Mi nombre es ${this.nombre} ${this.apellido}. ${mensaje}.`
    }
}

function Estudiante(nombre, apellido,edad, hobbie){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.hobbie = hobbie;
    this.decirHobbie = function(){
        return `Hola. Mi hobbie es ${this.hobbie}`
    }
    this.decirNombre = function(){
        return `Mi nombre es ${this.nombre} ${this.apellido}.`
    }

} 

let estudianteNuevo = new Estudiante ("Ignacio", "Jorge", 22, "Esconder ")

//console.log(estudiante.decirNombre("Feliz Primavera"));

module.exports = estudiante;