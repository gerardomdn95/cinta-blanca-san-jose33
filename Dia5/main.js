// x = 8 (No se hace)
// var JS antigüo
// let Valor va a cambiar
// cost valor nunca va a cambiar

// let j1 = prompt("Ingresa opción J1");
// let j2 = prompt("Ingresa opción J2");

// j1 = j1.toLocaleLowerCase();
// j2 = j1.toLocaleLowerCase();

// console.log("J1: " + j1);
// console.log("J2: " + j2);

// if(2 == "2"){
//  TRUE
// }

// if(2 === "2"){
// FALSE
// }

// // Empates
// if(j1 === "piedra" && j2 === "piedra") {
//     console.log("Empate");
// } else if(j1 === "papel" && j2 === "papel") {
//     console.log("Empate");
// } else if(j1 === "tijera" && j2 === "tijera") {
//     console.log("Empate");
//     // Gana J1
// } else if(j1 === "papel" && j2 === "piedra") {
//     console.log("Gana J1");
// } else if(j1 === "piedra" && j2 === "tijera") { 
//     console.log("Gana J1");
// } else if(j1 === "tijera" && j2 === "papel") {
//     console.log("Gana J1");
//     // Gana J2
// } else if(j2 === "papel" && j1 === "piedra") {
//     console.log("Gana J2");
// } else if(j2 === "piedra" && j1 === "tijera") { 
//     console.log("Gana J2");
// } else if(j2 === "tijera" && j1 === "papel") {
//     console.log("Gana J2");
// } else {
//     console.warn("Verifica que ingresaste valores correctos");
//     console.error("Error");
//     alert("error");
// }


// if(j1 === "piedra") {
//     if(j2 === "papel") {
//         console.log("Gana J2");
//     } else if(j2 === "piedra") {
//         console.log("Empate");
//     } else if(j2 === "tijera") {
//         console.log("Gana J1");
//     }
// } else if(j1 === "piedra") {
//     if(j2 === "papel") {
//         console.log("Gana J2");
//     } else if(j2 === "piedra") {
//         console.log("Empate");
//     } else if(j2 === "tijera") {
//         console.log("Gana J1");
//     }
// } else if(j1 === "piedra") {
//     if(j2 === "papel") {
//         console.log("Gana J2");
//     } else if(j2 === "piedra") {
//         console.log("Empate");
//     } else if(j2 === "tijera") {
//         console.log("Gana J1");
//     }
// }

// if (j1 === "piedra" || j1 === "papel" || j1 === "tijera") {
//     if (j2 === "piedra" || j2 === "papel" || j2 === "tijera") {
//         if (j1 === j2) {
//             console.log("Empate");
//             // Gana J1
//         } else if (j1 === "papel" && j2 === "piedra") {
//             console.log("Gana J1");
//         } else if (j1 === "piedra" && j2 === "tijera") {
//             console.log("Gana J1");
//         } else if (j1 === "tijera" && j2 === "papel") {
//             console.log("Gana J1");
//             // Gana J2
//         } else if (j2 === "papel" && j1 === "piedra") {
//             console.log("Gana J2");
//         } else if (j2 === "piedra" && j1 === "tijera") {
//             console.log("Gana J2");
//         } else if (j2 === "tijera" && j1 === "papel") {
//             console.log("Gana J2");
//         }
//     } else {
//         console.error("Opciones inválidas");
//     }
// } else {
//     console.error("Opciones inválidas");
// }

// let par =  5 % 2;
// let div = 5 / 2;
// console.log(par);
// console.log(div);

// Evaular si un número es múltiplo de 5
let numero = 15;
if(numero % 5 === 0 && numero % 3 === 0) {
    console.log(numero + " es múltiplo de 5 y 3");
} else {
    console.log(numero + " no es múltiplo de 5 y 3");
}

// Raíz cuadrada de un número
Math.sqrt(64);

// Elevar un número a n potencia
Math.pow(5, 3);
