//Variables para los elementos de la lista de productos
let contenedor = document.getElementById("contenedor");//contenedor general
let lista = document.getElementById("lista");//lista donde se van a añadir los productos
let totalCantidad = document.getElementById("totalCantidad");// elemento donde se muestra el total calculado

//Array de productos,precios, imagenes y stock
const productos = ["yerba", "vino", "té", "pan", "mate cocido", "leche", "manzana", "banana", "papa", "tomate", "chocolatada", "azucar", "aceite"];
const precios = [3000, 5000, 1500, 1000, 1300, 2500, 1200, 1000, 800, 1200, 2400, 2000, 2600];
const imagenes = ["../imagenes/yerba.jpg", "../imagenes/vino.webp", "../imagenes/té.webp", "../imagenes/pan.png", "../imagenes/mate cocido.webp", "../imagenes/leche.webp", "../imagenes/manzana.jpg", "../imagenes/banana.webp", "../imagenes/papa.webp", "../imagenes/tomate.webp", "../imagenes/chocolatada.png", "../imagenes/azucar.jpg", "../imagenes/aceite.webp"];
const stocks = [5, 3, 5, 10, 8, 6, 8, 5, 4, 7, 2, 3, 8];

//función que crea la lista de productos en la página
function pintarProductos(arrayProductos, arrayPrecios, arrayImagenes, arrayStocks) {
    for (let i = 0; i < arrayPrecios.length; i++) {
        let li = document.createElement("li");//crea un elemento de lista para el producto

        // Añade un atributo 'data-producto' al <li> para almacenar el nombre del producto
        li.dataset.producto = arrayProductos[i];

        //crea un nodo de texto con la información del producto
        let texto = document.createTextNode(`Producto: ${arrayProductos[i]} - Precio: $${arrayPrecios[i]} - Stock: ${arrayStocks[i]}`);

        //crea un elemento de imágen para el producto
        let imag = document.createElement("img");
        imag.src = arrayImagenes[i];
        imag.alt = `Imagen de ${arrayProductos[i]}`;

        //crea un campo de entrada para la cantidad del producto que se desea comprar
        let input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.value = "0";
        input.dataset.precio = arrayPrecios[i];//almacena el precio del producto
        input.dataset.stock = arrayStocks[i];//almacena el stock del producto

        //crea un elemento para mostrar el total del producto
        let precioTotal = document.createElement("span");
        precioTotal.textContent = "- Total: $ 0";

        //crea un botón para comprar el producto
        let boton = document.createElement("button");
        boton.textContent = "comprar";
        boton.onclick = function () {
            calcularPrecioTotal(input, precioTotal);// Calcula el total del producto cuando se hace clic en el botón
        };

        //agrega los elementos creados al elemento de lista
        li.appendChild(imag);
        li.appendChild(texto);
        li.appendChild(input);
        li.appendChild(boton);
        li.appendChild(precioTotal);

        //agrega el elemento de lista al contenedor de la lista
        lista.appendChild(li);
    }
}
//llama a la función para pintar los productos en la página
pintarProductos(productos, precios, imagenes, stocks);

//función para calcular el total del producto
function calcularPrecioTotal(input, precioTotal) {
    let cantidad = parseInt(input.value) || 0;
    let precioUnitario = parseInt(input.dataset.precio) || 0;
    let stockDisponible = parseInt(input.dataset.stock) || 0;
    
    //verifica si la cantidad ingresada es válida
    if (cantidad < 0) {
        alert("la cantidad no puede ser negativa.");
        input.value = "0";
        return;
    }
    if (cantidad > stockDisponible) {
        alert(`La cantidad deseada (${cantidad}) excede el stock disponible (${stockDisponible}).`);
        input.value = "0"; //si excede la cantidad del stock vuelve a 0
        return;
    }

    //calcula el total del producto
    let totalProducto = cantidad * precioUnitario;
    precioTotal.textContent = ` - Total: $${totalProducto}`;

    //actualiza el stock disponible
    input.dataset.stock = stockDisponible - cantidad;

    //actualiza el texto del producto con el nuevo stock
    let textoProducto = input.parentElement.childNodes[1];
    textoProducto.textContent = `Producto: ${input.parentElement.dataset.producto} - Precio: $${precioUnitario} - Stock: ${input.dataset.stock}`;


    calcularTotal();
}
//función para calcular el total de la compra de los productos
function calcularTotal() {
    let inputs = document.querySelectorAll("li input");//obtiene los campos de entrada de la lista de productos
    let total = 0;
    inputs.forEach(input => {
        let cantidad = parseInt(input.value) || 0;//obtiene la cantidad ingresada, si no es un número pone 0 
        let precioUnitario = parseInt(input.dataset.precio) || 0;//obtiene el precio del producto
        total += cantidad * precioUnitario;// Suma el total del producto al total general
    });

    //muestra el total general
    totalCantidad.textContent = `Total a pagar: $${total}`;
}
