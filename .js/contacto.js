//Variables para los elementos del formulario de contacto
let nombre = document.getElementById("nombre"); //campos de entrada para el nombre
let apellido = document.getElementById("apellido");// "" apellido
let telefono = document.getElementById("tel");// "" telefono
let email = document.getElementById("mail");//"" email
let mensaje = document.getElementById("mensaje");//"" mensaje
let botonenviar = document.getElementById("enviar");// botón para enviar el formulario

//Array para almacenar la información del formulario
let informacion = [];

// Función para validar el nombre y apellido
function validarNomApe(valor) {
    let regex = /^[A-Za-z\s]+$/;
    return regex.test(valor);
}

// Función para validar el email
function validarEmail(valor) {
    // Verifica que el email contenga '@'
    return valor.includes('@');
}
// agrega un evento al botón de enviar para procesar la información del formulario
botonenviar.addEventListener("click", (e) => {
    e.preventDefault();//no permite que el formulario se envíe

    //comprobar nombre
    if (!validarNomApe(nombre.value)) {
        alert("El nombre solo puede contener letras y espacios");
        return; // Detiene la ejecución del código
    }

    // comprobar apellido
    if (!validarNomApe(apellido.value)) {
        alert("El apellido solo puede contener letras y espacios.");
        return; // Detiene la ejecución del código
    }

    // comprobar email
    if (!validarEmail(email.value)) {
        alert("El email debe contener un '@'.");
        return; // Detiene la ejecución del código
    }



    //guarda los datos del formulario ingresados por el usuario en el array "información" 
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = telefono.value;
    informacion[3] = email.value;
    informacion[4] = mensaje.value;
    
    // crea un archivo Blob con la información del formulario
    let blob = new Blob([informacion], { type: "text/plain;charset=utf-8" });

    // es una función de la biblioteca FileSaver.js que permite la descarga del archivo en el navegador, blob contiene la información 
    //del formulario convertido en archivo de texto y contacto.txt es donde se guarda.
    saveAs(blob, "contacto.txt");

    // borra los campos del formulario después de guardar el archivo
    nombre.value = '';
    apellido.value = '';
    telefono.value = '';
    email.value = '';
    mensaje.value = '';
});