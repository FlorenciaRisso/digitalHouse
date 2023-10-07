    //METODOS ARRAYS

//  CONVERTIR ARRAY EN STRING .JOIN()

let arrayFrase = [
  "No",
  "he",
  "fracasado,",
  "simplemente",
  "me",
  "he",
  "topado",
  "con",
  "diez",
  "mil",
  "soluciones",
  "equivocadas"
];

let fraseNueva = arrayFrase.join(" ")
console.log(fraseNueva)

//

//  QUITAR EL PRIMER ELEMENTO DEL ARRAY .SHIFT()

let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
]

let alumnoDeBaja = estudiantes.shift()
console.log(alumnoDeBaja)

//

//  QUITAR EL ULTIMO ELEMENTO DEL ARRAY .POP()

let estudiantes1 = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
];

let alumnoEgresado = estudiantes1.pop()
console.log(alumnoEgresado);

//

//  AGREGAR ELEMENTOS AL FINAL DEL ARRAY .PUSH()

let estudiantes2 = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
]
    estudiantes2.push({
      nombre: 'Juan',
      promedio: 5,
      curso : 'iOS'})
    
    estudiantes2.push({
      nombre: "Miguel",
      promedio: 2,
      curso : "Android"})

  console.log(estudiantes2)

// 

//  AGREGAR ELEMENTOS AL PRINCIPIO DEL ARRAY
    
let estudiantes3 = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
  },
  {
    nombre: 'Alexis',
    promedio : 3,
    curso : 'iOS',
  }
]

  estudiantes3.unshift({
    nombre: 'Mariana',
    promedio: 9,
    curso: 'Full Stack'})

  estudiantes3.unshift({
    nombre: 'Francisco',
    promedio: 2,
    curso: 'Android'})

console.log(estudiantes3)

    //FUNCIONANDO