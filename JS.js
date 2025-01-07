//*1. Suma de dos números
//*Crea un programa que solicite dos números al usuario y muestre su suma.

// const prompt = require("prompt-sync")();

// num1 = Number(prompt("Escriba el primer numero: "))
// num2 = Number(prompt("Escriba el primer numero: "))

// console.log(num1+num2);


//*Par o impar
//*Pide un número al usuario y determina si es par o impar usando if.

// const prompt = require("prompt-sync")();

// num = Number(prompt("Ingrese el Numero para determinar si es par o impar: "))
// if (num %2 === 0){
//     console.log("Es par mi socio sin palabras");
// } else{
//     console.log("Es impar, trateme serio");
    
// }



//*Mayor de tres números
//*Pide tres números al usuario e imprime cuál es el mayor.


// const prompt = require ("prompt-sync")();

// num1 = Number(prompt("Ingrese el primer numero que desea comparar: "))
// num2 = Number(prompt("Ingrese el primer numero que desea comparar: "))
// num3 = Number(prompt("Ingrese el primer numero que desea comparar: "))

// if (num1 > num2 > num3) {
//     console.log("el primer numero",num1,"es mayor: " );
// }else if(num2 > num3) {
//     console.log("el segundo numero",num2,  "es mayor:");
// }else if ( num3 > num1){
//     console.log("el tercer numero","(",num3,")",  "es mayor:");
// }else{
//     console.log("sea serio!");
    
// }

// *Tabla de multiplicar
// *Escribe un programa que imprima la tabla de multiplicar del 1 al 10 para un número ingresado por el usuario

    
// const prompt = require("prompt-sync")();

// let num = Number(prompt("¿Que tabla de multipliacar desea?: "))
// const lista = [0,1,2,3,4,5,6,7,8,9]
// let contador = 1
// console.log("La tabla que desea es: ");
// for (let i in lista) {
//     console.log(num,"X", contador,"=",num*contador);
//     contador +=1
// }


// *Contar vocales
// *Pide al usuario una palabra y usa un for para contar cuántas vocales tiene

// const prompt = require("prompt-sync") ();

// let palabra = String(prompt("Ingrese la palabra: "));
// let contador = 0;
// let vocales = ["a","e","i","o","u","A","E","I","O","U"]

// for (let letra of palabra){ //primer for para recorrer a la palabra
//     for (let vocal of vocales){ //con esto se compara cada letra con la vocal
//         if (letra === vocal){ // si la t¿letra coincide con la vocal se aumenta en 1
//             contador +=1
//             break;
//         }
//     }
//     }
// console.log("para la palabra ",palabra, "la cantidad de vocales es: ",contador);


//* Números del 1 al N
//* Pide al usuario un número N e imprime todos los números del 1 al N usando un while
const prompt =require("prompt-sync") ();

let limite = Number(prompt("¿Hasta que numero contar?: "));
let num = 1;
while (num <= limite){
    console.log("Número :", num);
    num +=1
}




