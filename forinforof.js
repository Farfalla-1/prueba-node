//forIn itinera sobre un ubjeto Literal

let user = {
    name: "Agustin",
    age: 21,
    ocupation: "Nada"
}

for(let prop in user){
    console.log(user[prop])

}
 
//forOF lo mismo que el forIn pero solo tira el valor (Y ES SOBRE UN ARRAY)
let sitios = ["hola", "chau"]

for (const valor of sitios) {
    console.log(valor)
    
}