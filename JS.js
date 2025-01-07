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
// const prompt =require("prompt-sync") ();

// let limite = Number(prompt("¿Hasta que numero contar?: "));
// let num = 1;
// while (num <= limite){
//     console.log("Número :", num);
//     num +=1
// }



//* 10.
let numeroPrimo = parseInt(prompt("Escribe un número para verificar si es primo:"));
let esPrimo = true;

if (numeroPrimo <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i < numeroPrimo; i++) {
        if (numeroPrimo % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

if (esPrimo) {
    console.log(numeroPrimo + " es un número primo.");
} else {
    console.log(numeroPrimo + " no es un número primo.");
}


//* 11.
let base = parseFloat(prompt("Escribe la base del triángulo:"));
let altura = parseFloat(prompt("Escribe la altura del triángulo:"));
let area = (base * altura) / 2;
console.log("El área del triángulo es: " + area);


//* 12.
function encontrarMayor(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

let numA = parseInt(prompt("Escribe el primer número:"));
let numB = parseInt(prompt("Escribe el segundo número:"));
let numC = parseInt(prompt("Escribe el tercer número:"));
console.log("El mayor de los tres números es: " + encontrarMayor(numA, numB, numC));


//* 15.
function esPalindromo(palabra) {
    let invertida = palabra.split("").reverse().join("");
    return palabra === invertida;
}

let palabraUsuario = prompt("Escribe una palabra:");
if (esPalindromo(palabraUsuario)) {
    console.log("La palabra '" + palabraUsuario + "' es un palíndromo.");
} else {
    console.log("La palabra '" + palabraUsuario + "' no es un palíndromo.");
}

//*17.
function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

let cadenaUsuario = prompt("Escribe una cadena:");
console.log("La cadena invertida es: " + invertirCadena(cadenaUsuario));


//* 19.
function esPerfecto(numero) {
    let sumaDivisores = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    return sumaDivisores === numero;
}

console.log("Números perfectos entre 1 y 1000:");
for (let i = 1; i <= 1000; i++) {
    if (esPerfecto(i)) {
        console.log(i);
    }
}




// *20.Menú interactivo
// *Diseña un programa que muestre un menú al usuario con opciones como:
// *1. Calcular el cuadrado de un número.
// *2. Mostrar números pares entre dos valores.
// *3. Salir del programa.
// *Usa un bucle while para mantener el menú activo hasta que el usuario elija
// * salir.


//* Menú interactivo
counter = 0
while (counter === 0 ){
let opcion = Number(prompt("Elija una opción:\n1. Calcular el cuadrado de un número.\n2. Mostrar números pares entre dos valores.\n3. Salir del programa."))
if (opcion === 1 ){
numero = Number(prompt("Escriba un número: "))
console.log("El cuadrado es : ", Math.pow(numero,2));

} else if (opcion === 2){
let inicio = Number(prompt("Escriba el primer número:"));
let fin = Number(prompt("Escriba el segundo número:"));
console.log(`Números pares entre ${inicio} y ${fin}:`);
for (let i = inicio; i <= fin; i++) {
if (i % 2 === 0) {
console.log(i);
}}
} else if(opcion === 3 ){
console.log("usted ha salido del menú");
counter = 1;

} else {
break;
}
}