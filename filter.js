/*filter Ejecuta una function para cada elemento de un array que cumpla con una determinada condicion, 
los elementos que no la cumplen son salteados.*/

let numeros = [1,2,3,4,5,6,7,8,9,10,12,12323,32,2323,43434];

let pares = numeros.filter(function(numero){
    return numero % 2 == 0
})

console.log(pares)

let impares = numeros.filter(function(numero){
    return numero % 2 != 0
})

console.log(impares)

// ejemplo mas complejo
//tenemos un array con objetos(alumnos) y la funcion toma todos los objetos y devulve los que estan presentes 

let estudiantes = [
    {name : "Alejandro", presente : true},
    {name : "Maru", presente : false},
    {name : "Nacho", presente : false},
    {name : "Agustin", presente : true},
 ]

 let presente = estudiantes.filter(function(e){
     return e.presente
 })
 console.log(presente)