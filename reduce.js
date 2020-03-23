//reduce lleva al array a la minima exprecion (a un solo dato)

/*let frase = ["hola", "Como", "estas","soy", "agustin"]

let resultado = frase.reduce(function(anterior,actual){
      return anterior + " " + actual
})
console.log(resultado) */

//para lo unico que sirve es para trasformar un array a un solo valor

//EJEMPLO REAL
let productos = [
    {nombre:"laptop",stock: 3,valor:1232},
    {nombre:"monitor",stock: 4,valor:122},
    {nombre:"caja",stock: 8,valor:12123},
    {nombre:"manzana",stock: 1,valor:233},
    {nombre:"camara",stock: 10,valor:12123},]

let final = {
    cantidadTotal: 0,
    precioTotal: 0,}


    let resumen = productos.reduce(function(resultado,producto){
    resultado.precioTotal =  (producto.valor * producto.stock) + resultado.precioTotal
    resultado.cantidadTotal = resultado.cantidadTotal + producto.stock
    return resultado
  
},final)
console.log(resumen)