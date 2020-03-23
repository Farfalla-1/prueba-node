/*forEach es exactamento lo mismo que en el map, pero no devuelve nada   
es cuando quiero hacer una funcion pero no quiero devolver nada     */

let numeros = [0,1,2,3,4,5,6,7,8,9,10];

let tabladelDos = numeros.forEach(function(numero){
    console.log(numero * 2)
})

//es como hacer un listado, ya que no retorna nada


//si agrego un parametro en la funcion, es la posicion en el array
 
let tabladelTre = numeros.forEach(function(numero, X){
    console.log("posicion " + X + " : " + numero * 3)
})
//en este caso X es la posicion del numero en el array