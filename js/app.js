//Boletín 1

/*
Ejercicio 1.

Pide por pop-up la altura y el peso y almacénalo cada uno en una variable.

Ejercicio 2.

Imprime por pantalla la suma de ambas variables.
*/

    /*

    //Creamos variables de altura y de peso y le asignamos el prompt que introduzca el usuario,
    //en caso de que no se intruduzca nada el valor será null
    let altura = Number.parseFloat(prompt("Introduce tu altura: "));
    let peso = Number.parseFloat(prompt("Introduce tu peso: "));

    //Imprimimos por pantalla la suma de ambas
    console.log(altura+peso);

    */

/*

Ejercicio 3.

Pide por pop-up la edad y almacénala en una variable.

Ejercicio 4.

Define una variable con un operador ternario que sea true si la edad es mayor que 18 o false si es menor.
*/

    /*

    //Almacenamos en una variable la edad, usamos parseInt para parsear el String que nos devuelve el prompt
    let edad = Number.parseInt(prompt("Introduce tu edad: "));

    //Alamcenamos en una variable mediante un operador ternario si la edad es mayor true y sino false
    let mayorDeEdad = edad > 18 ? true : false;
    //Añadimos un console.log() para comprobar que funcionar correctamente el operador ternario
    console.log(mayorDeEdad);

    */

/*

Ejercicio 5.

Crea un bucle que sume los primeros 5 números pares entre 50 y 70. Haz esto de 3 maneras distintas.

*/
//Creamos la variable que almacene 50 y la que almacene 70

let numMin = 50;
let numMax = 70;
//Creamos una variable resultado donde vaya sumando los numeros
let res = 50;

//BUCLE FOR
    /*
    for (let i = 0; i<4 ; i++ ){
        numMin+=2;
        res+=numMin
    }
    */

//BUCLE WHILE
//Para el bucle while tenemos que crear una variable contadora
let contador = 0;
    /*
    while(contador < 4){
        numMin+=2;
        res+=numMin
        //Con el ++ incrementamos el valor de dicha variable
        contador++;
    }
    */

//BUCLE DO WHILE
//Usaremos el contador que usamos para el bucle while.
//El bucle do while es parecido al bucle while, solo que cumpla o no la condición este siempre entra en el bucle
//minimo una vez

    /*
    do{
        numMin+=2;
        res+=numMin;
        contador++;
    }while (contador<4 && contador>0);
    */
//console.log(res);


/*
Ejercicio 6.

Pide por pop-up un nombre y almacénalo en una variable.

Ejercicio 7.

Comprueba si el nombre contiene la palabra malsonante "Mierda".

Ejercicio 8.

En caso de contenerla, haz un slice del nombre de manera que el resultado de la subcadena dicha sea 
dicha palabra malsonante. En caso de no contenerla, muestra por pantalla un mensaje de bienvenida 
mediante un pop-up.
*/

    /*
    let nombre = prompt("Introduce una cadena: ");
    const palabra = "mierda";

    //Comprobamos si el nombre incluye la palabra mal sonante
    if(nombre.includes(palabra)){
        //En caso de contenerla tenemos que sacar una subcadena
        //Necesitamos su indice y su longitud
        let index = nombre.indexOf(palabra);
        let longitud = palabra.length;

        //Como incluye la palabra hacemos ahora el slice
        //Por ultimo sumamos el indice mas su longitud para sacar la longitud real en la cadena
        let resultadoCadena = nombre.slice(index, index+longitud);
        
        alert(`Bienvenido, ${resultadoCadena}`);
    }else{
        alert(`Bienvenido, ${nombre}`);
    }
    */

/*
Ejercicio 9.

Crea una cadena con los nombres de los compañeros que estén en tu misma fila, separados por comas.

Ejercicio 10.

Almacena en una variable el array resultado de separar la cadena anterior por comas (Usar un método de la clase String).

Ejercicio 11.

Itera con un bucle dicho array, imprimiendo por consola cada elemento.
*/

    /*
    let cadenaCompanero = "Miguel Angel, Juan Antonio, Jose Antonio, Iván";

    //Para almacenar en un array cada uno de los elementos de una cadena usamos la funcion split

    let arrayCompanero = cadenaCompanero.split(", ");

    //Mostramos el array por consola para ver que ha funcionado
    console.log(arrayCompanero);

    //Para recorrer el array vamos a usar el bucle for.

    for(let companero of arrayCompanero){
        console.log(companero);
    }
    */
