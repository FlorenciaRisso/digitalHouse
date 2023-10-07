let autosImportados = require('./autos');

let concesionaria = {
   autos: autosImportados,

   buscarAuto: function(patente){
      return this.autos.find(auto => auto.patente == patente);
   }
} 
console.log(concesionaria.buscarAuto("APL123"))


