//SUMATORIAS

function sumatoriaGananciasSemestre(unSemestre) {
  return unSemestre[0] + unSemestre[1] +
      unSemestre[2] + unSemestre[3] +
      unSemestre[4] + unSemestre[5];
}console.log(sumatoriaGananciasSemestre(80))
console.log(sumatoriaGananciasSemestre(453))
console.log(sumatoriaGananciasSemestre(1000))

console.log(" ")

function gananciaTotal(unPeriodo) {
  let sumatoria = 0;
  for (let i = 0; i < unPeriodo.length; i++) {
      let mes = unPeriodo[i];
      sumatoria = sumatoria + mes;
  }
  return sumatoria;
}console.log(gananciaTotal([]))
console.log(gananciaTotal([100]))
console.log(gananciaTotal([100, 2]))
console.log(gananciaTotal([2, 10, -20]))
console.log(gananciaTotal([2, 10, -20, 0, 0, 10, 10]))

console.log(" ")

function cantidadDeMesesConGanancia(unPeriodo) {
  let cantidad = 0;
  for (let i=0; i < unPeriodo.length;i++) {
    let mes = unPeriodo[i]
    if(mes > 0) cantidad++;
   
    }
 return cantidad;
  }
  console.log(cantidadDeMesesConGanancia([10, -10, 2, 100]))

      //FUNCIONANDO