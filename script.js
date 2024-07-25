let contenedor =document.getElementById("contenedor");
let lista= document.getElementById("lista");
const productos=["yerba","vino","té","pan","mate cocido","leche","manzana","banana","papa","tomate","chocolatada","azucar","aceite"];
const precios=[3000,5000,1500,1000,1300,2500,1200,1000,800,1200,2400,2000,2600];

function pintarProductos(arrayProductos,arrayPrecios){
    for(let i=0; i< arrayPrecios.length; i++){
        let li= document.createElement("li");
        let texto= document.createTextNode(`Producto: ${arrayProductos[i]} - Precio: $${arrayPrecios[i]}`);
        li.appendChild(texto);
        lista.appendChild(li);
    }
}
pintarProductos(productos,precios);