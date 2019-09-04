let opcJ1 = "";
let opcJ2 = "";

function juego(j1, j2) {
    console.log("Jugador 1 " + opcJ1);
    console.log("Jugador 2 " + opcJ2);
    // Empate
    if (j1 === "piedra" && j2 === "piedra") {
        console.log("Empate");
    } else if (j1 === "papel" && j2 === "papel") {
        console.log("Empate");
    } else if (j1 === "tijera" && j2 === "tijera") {
        console.log("Empate");
        // Gana J1
    } else if (j1 === "papel" && j2 === "piedra") {
        console.log("Gana J1");
    } else if (j1 === "piedra" && j2 === "tijera") {
        console.log("Gana J1");
    } else if (j1 === "tijera" && j2 === "papel") {
        console.log("Gana J1");
        // Gana J2
    } else if (j2 === "papel" && j1 === "piedra") {
        console.log("Gana J2");
    } else if (j2 === "piedra" && j1 === "tijera") {
        console.log("Gana J2");
    } else if (j2 === "tijera" && j1 === "papel") {
        console.log("Gana J2");
    } else {
        console.warn("Verifica que ingresaste valores correctos");
        console.error("Error");
        alert("error");
    }
}

function opcionJ1(opcion) {
    console.log(opcion);
    opcJ1 = opcion;
}

function opcionJ2(opcion) {
    console.log(opcion);
    opcJ2 = opcion;
}

