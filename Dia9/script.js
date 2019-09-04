function Saludar() {
    alert("Hola mundo");
}

function Down() {
    alert("Down");
}

function Press() {
    alert("Press");
}

function Up() {
    alert("Up");
}

function Rojo() {
    let elemento = document.getElementById("titulo");
    console.log(elemento);
    console.log(elemento.innerText);
    console.log(elemento.id);
    console.log(elemento.className);

    elemento.innerText = "Rojo";
    elemento.classList.add("rojo");
    elemento.style.background = "black"
}
