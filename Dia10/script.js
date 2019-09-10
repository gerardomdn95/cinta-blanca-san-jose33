// Ejercicios 1

//          0  0 <= 100;  1
//             1 <= 100;  2
//             2 <= 100;  3
//          ...
//           100 <= 100; 101
//           101 <= 100; FIN

// for(let i = 0; i <= 100; i++) {
//     console.log(i);
// }

// 0
// 1
// 2
// ...
// 100

// Ejercicio 2

// for(let i = 100; i >= 0; i--) {
//     console.log(i);
// }

// Ejercicio 3

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// Ejercicio 4

//           0  1  2  3  4  5  6  7
// let array = [2, 3, 5, 6, 7, 8, 9];
// let paises = ["Costa Rica", "Estados Unidos", "México"];

// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// console.log(array);

// let numeros = [];

// for(let i = 0; i<= 100; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//         if (i === 0) {
//             console.log(i);
//             numeros.push(i);
//         } else {
//             console.log("FizzBuzz " + i);
//             numeros.push("FizzBuzz " + i);
//         }
//     } else if(i % 3 === 0) {
//         console.log("Fizz " + i);
//         numeros.push("Fizz " + i)
//     } else if(i % 5 === 0) {
//         console.log("Buzz " + i);
//         numeros.push("Buzz " + i);
//     } else {
//         console.log(i);
//         numeros.push(i);
//     }
// }

// console.log(numeros);

// let nombre = "123456789";
// let nombreArreglo = nombre.split("");

// console.log(nombreArreglo);

function evaluar(array) {
    let mayor = "";
    for(i = 0; i < array.length; i++) {
        console.log(array[i] + " > " + mayor);
        console.log(array[i].length + " > " + mayor.length);
        if(array[i].length > mayor.length) {
            mayor = array[i];
        }
        console.log("Mayor vale: " + mayor);
    }
    console.log("Mayor: " + mayor);
}

//               0           1           2             3
let paises = ["Panamá", "Guatemala", "Colombia", "Costa Rica"];

evaluar(paises);
// evaluar(["México", "Estados Unidos", "Canadá"])


