//Boletín 2

/*
Ejercicio 1.

Dado el array = [3,7,11,8,1,4]

1) Mostrar por pantalla el valor de cada elemento multiplicado por vuestra edad. La edad debe pedirla 
por una alerta.
2) Modificar el valor de cada elemento del array por el resto de dividir cada elemento entre 2.

*/

/*
//Creamos el array de los numeros que nos han proporcionado
let numbers = [3,7,11,8,1,4];

//Creamos una variable age y almacenamos 
let age = Number.parseInt(prompt("Introduce tu edad: "));
    //Recorremos el array y lo multiplicamos por la edad que ha introducido el usuario
    for(let number of numbers){
        let res = number*age;
        console.log(res);
    }
    
//Nos pide que que multipluqmeos cada numero por el resto de dividir cada numero entre 2
//Por lo tanto, usando el modulo nos da el resultado del resto y lo multiplicamos

let newArray = numbers.map(function(number){
    return number*(number%2);
})

console.log(newArray);
*/
