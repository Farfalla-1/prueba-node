

//funcion map es lo mismo que un for, recorre un array y aplica una funcion
let dias =  ["Lunes", "Martes", "Miercoles"]

let resultadoDeMap = dias.map(function(dia){ 
  console.log("parametro dia: " + dia)
  return dia.toUpperCase()    
})

//filter ;; 