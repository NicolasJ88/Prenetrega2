alert ("¿Desea permitir las cookies en este sitio web?")

function mostrarOpcion() {
    const select = document.getElementById('opciones');
    const opcionSeleccionada = select.value;
    alert('Opción seleccionada: ' + opcionSeleccionada);
}

let ahora = new Date();
console.log(ahora);


let puntuacion = prompt("Del 1 al 10 que le parecio el servicio");

if (puntuacion >= 9) {
    console.log("Exelente");
} else if (puntuacion >= 8) {
    console.log("Muy Bueno");
} else if (puntuacion >= 5) {
    console.log("Normal");
} else if (puntuacion >= 3) {
    console.log("Malo");
}


// calculadora
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}