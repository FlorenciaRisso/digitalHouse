let perro = {
    nombre: "Tomy",
    edad: 1,
    vacunado: true
}

console.log(`Mi perro se llama ${perro.nombre} y tiene ${perro.edad} años`)

let curso = {
    cantidadDeAlumnos : 32,
    docentes : ["Nacho", "Javier"],
    horario : "de 19 a 21 hs.",
    notificaciones: function(){
        return `El horario de la cursada es ${this.horario}`
    }
}
console.log("La cantidad de alumnos de este curso es " + curso.cantidadDeAlumnos);
console.log(curso.notificaciones())


let miPais = {
    nombre: "Argentina",
    poblacion: 4009200,
    capital: "Buenos Aires",
    decirNacionalidad: function (){
        return "Yo nací en " + this.nombre
    }
}
console.log(miPais.decirNacionalidad());


//CONSTRUCTOR DE LOS OBJETOS. el nombre de la funcion inicia con mayuscula

function Curso(cantidadDeAlumnos, docentes, horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes; 
    this.horarios = this.horarios;
}

let cursoDeProgramacion = new Curso(50,["Javier, Gerardo", "de 19 a 21 hs."])
let cursoDeMarketing = new Curso(25,["Diego, Debi", "de 17 a 19 hs."])

console.log(cursoDeProgramacion);
console.log(cursoDeMarketing);

