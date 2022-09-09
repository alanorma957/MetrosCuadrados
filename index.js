

let producto = [
    {
        nombre: 'Vinilo',
        precio: 1200
    },
    {
        nombre: 'Lona Front',
        precio: 1150
    },
    {
        nombre: 'lona Back',
        precio: 1500
    },
    {
        nombre: 'Lona Bo',
        precio: 1200
    },
    {
        nombre: 'Termotransferible',
        precio: 3800
    }
]

function multiplicacion(producto, precio) {
    let resultado = producto * precio;
    return resultado;
}


function crearMensaje() {
    let mensaje = 'Que producto desea comprar?'
    let count = 1
    for (let producto of productos) {
        mensaje += `\n${count}. ${producto.nombre} - $ ${producto.precio}`
        count++
    }

    mensaje += `\n${count}. Salir`

    return mensaje
}

function cantidad(producto) {
    let(`ancho ${producto.nombre} * ${producto.precio} alto,`)

}

function subtotal(cantidad, producto) {
    alert(`${producto.nombre} por $ ${cantidad * producto.precio}`)
    return cantidad * producto.precio
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

