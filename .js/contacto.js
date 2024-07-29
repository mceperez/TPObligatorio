let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let telefono = document.getElementById("tel");
let mensaje = document.getElementById("mensaje");
let botonenviar = document.getElementById("enviar");

let informacion = [];

botonenviar.addEventListener("click",(e) => {
    e.preventDefault();
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = telefono.value;
    informacion[3] = mensaje.value;

let blob = new Blob([informacion],{type: "text/plain;charset=utf-8"});
saveAs(blob, "contacto.txt");


});