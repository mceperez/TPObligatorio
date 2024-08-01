//Variables para los elementos del formulario de contacto
let nombre = document.getElementById("nombre"); //campos de entrada para el nombre
let apellido = document.getElementById("apellido");// "" apellido
let telefono = document.getElementById("tel");// "" telefono
let mensaje = document.getElementById("mensaje");//"" mensaje
let botonenviar = document.getElementById("enviar");// botón para enviar el formulario

//Array para almacenar la información del formulario
let informacion = [];

// agrega un evento al botón de enviar para procesar la información del formulario
botonenviar.addEventListener("click",(e) => {
    e.preventDefault();//no permite que el formulario se envíe

    //guarda los datos del formulario ingresados por el usuario en el array "información" 
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = telefono.value;
    informacion[3] = mensaje.value;
// crea un archivo Blob con la información del formulario
let blob = new Blob([informacion],{type: "text/plain;charset=utf-8"});
// es una función de la biblioteca FileSaver.js que permite la descarga del archivo en el navegador, blob contiene la información del formulario convertido en archivo de texto y contacto.txt es donde se guarda.
saveAs(blob, "contacto.txt");


});