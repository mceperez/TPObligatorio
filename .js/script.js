let contenedor = document.getElementById("contenedor");
let lista = document.getElementById("lista");
let btnTotal = document.getElementById("botonTotal");
let totalCantidad = document.getElementById("totalCantidad");
const productos = ["yerba", "vino", "té", "pan", "mate cocido", "leche", "manzana", "banana", "papa", "tomate", "chocolatada", "azucar", "aceite"];
const precios = [3000, 5000, 1500, 1000, 1300, 2500, 1200, 1000, 800, 1200, 2400, 2000, 2600];
const imagenes = ["../imagenes/yerba.jpg", "../imagenes/vino.webp", "../imagenes/té.webp", "../imagenes/pan.png", "../imagenes/mate cocido.webp", "../imagenes/leche.webp", "../imagenes/manzana.jpg", "../imagenes/banana.webp", "../imagenes/papa.webp", "../imagenes/tomate.webp", "../imagenes/chocolatada.png", "../imagenes/azucar.jpg", "../imagenes/aceite.webp"];
const stocks = [5, 3, 5, 10, 8, 6, 8, 5, 4, 7, 2, 3, 8];

function pintarProductos(arrayProductos, arrayPrecios, arrayImagenes, arrayStocks) {
    for (let i = 0; i < arrayPrecios.length; i++) {
        let li = document.createElement("li");

        let texto = document.createTextNode(`Producto: ${arrayProductos[i]} - Precio: $${arrayPrecios[i]} - Stock: ${arrayStocks[i]}`);

        let imag = document.createElement("img");
        imag.src = arrayImagenes[i];
        imag.alt = `Imagen de ${arrayProductos[i]}`;

        let input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.value = "0";
        input.dataset.precio = arrayPrecios[i];
        input.dataset.stock = arrayStocks[i];

        let precioTotal = document.createElement("span");
        precioTotal.textContent = "- Total: $ 0";

        let boton = document.createElement("button");
        boton.textContent = "comprar";
        boton.onclick = function () {
            calcularPrecioTotal(input, precioTotal);
        };


        li.appendChild(imag);
        li.appendChild(texto);
        li.appendChild(input);
        li.appendChild(boton);
        li.appendChild(precioTotal);

        lista.appendChild(li);
    }
}
pintarProductos(productos, precios, imagenes, stocks);

function calcularPrecioTotal(input, precioTotal) {
    let cantidad = parseInt(input.value) || 0;
    let precioUnitario = parseInt(input.dataset.precio) || 0;
    let stockDisponible = parseInt(input.dataset.stock) || 0;

    if (cantidad < 0) {
        alert("la cantidad no puede ser negativa.");
        input.value = "0";
        return;
    }
    if (cantidad > stockDisponible) {
        alert(`La cantidad deseada (${cantidad}) exede el stock disponible (${stockDisponible}).`);
        input.value = "0";
        return;
    }

    let totalProducto = cantidad * precioUnitario;
    precioTotal.textContent = ` - Total: $${totalProducto}`;
    input.dataset.stock = stockDisponible - cantidad;
    let textoProducto = input.parentElement.childNodes[1];
    textoProducto.textContent = `Producto: ${input.parentElement.dataset.producto} - Precio: $${precioUnitario} - Stock: ${input.dataset.stock}`;


    calcularTotal();
}

function calcularTotal() {
    let inputs = document.querySelectorAll("li input");
    let total = 0;
    inputs.forEach(input => {
        let cantidad = parseInt(input.value) || 0;
        let precioUnitario = parseInt(input.dataset.precio) || 0;
        total += cantidad * precioUnitario;
    });

    totalCantidad.textContent = `Total a pagar: $${total}`;
}
btnTotal.addEventListener("click", calcularTotal);