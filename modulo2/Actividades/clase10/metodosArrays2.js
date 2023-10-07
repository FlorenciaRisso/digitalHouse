//.MAP(),  .FILTER(),   .FOREACH(), .REDUCE()


  //  .FILTER()
  
let estudiantes = [
    { nombre: "John", promedio: 8.5, aprobado: true },
    { nombre: "Jane", promedio: 7, aprobado: true },
    { nombre: "June", promedio: 3, aprobado: false },
  ];
  let aprobados = estudiantes.filter(function(persona) {
    return persona.aprobado;
  });
  let desaprobados = estudiantes.filter(function (persona) {
    return !persona.aprobado;
  });
  
  console.log(aprobados);
  console.log(desaprobados);




  //  .MAP()

let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function(avion){
    return avion -1 
})
console.log(horariosAtrasados)



  //  .REDUCE()

let vueltas = [5, 8, 12, 3, 22];

let totalVueltas = vueltas.reduce(function(total, vuelta){
    return total + vuelta
})
console.log(totalVueltas)



  //  .FOREACH

  let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];
listaDeSuperMercado.forEach(function(lista){
    console.log(lista)
})
  