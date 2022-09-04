
function multiplicacion(numeroUno, numeroDos) {
    let resultado = numeroUno * numeroDos;
    return resultado;
}



function mostrarResultado(resultado) {
    alert("Cantidad de mt2:  " + resultado);
}

function mostrarMenu() {
    let opcion = prompt(
        "Bienvenido a Zona CMYK, seleccione la opcion (ESC para salir)\n1. Vinilo\n2. Lona Front\n3. Lona BO \n4. Lona Back "
    );
    return opcion;
}

function MetrosCuadrados() {
    let opcionSeleccionada = mostrarMenu();
    while (opcionSeleccionada.toUpperCase() !== "ESC") {
        if (opcionSeleccionada !== "") {
            opcionSeleccionada = parseInt(opcionSeleccionada);

            if (!isNaN(opcionSeleccionada)) {
                let numeroUno = parseFloat(prompt("Ingrese ancho en cm"));
                let numeroDos = parseFloat(prompt("Ingrese altura en cm"));
                switch (opcionSeleccionada) {


                    case 1:
                        let resultadoMultiplicacion = multiplicacion(numeroUno, numeroDos);
                        mostrarResultado(resultadoMultiplicacion);
                        break;


                    default:
                        alert("Opcion Incorrecta");
                        break;
                }
            } else {
                alert("Ingresó una letra");
            }
        } else {
            alert("Seleccione la opción");
        }
        opcionSeleccionada = mostrarMenu();
    }
}

MetrosCuadrados();