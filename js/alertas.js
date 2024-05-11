
let textA = "Cliente Agregado Exitosamente"
let textB = "No Hay Ningun Cliente Registrado"
let textC = "Debe Ingresar el Apellido del Cliente a Buscar"
let textD = "El Cliente Ya Ha Sido Visualizado"
let textE = "Cliente No Registrado"
let textF = "Debe Ingresar un Usuario y Contraseña válidos para Iniciar"
let textG = "La Clave o el Usuario son Incorrectos"
let textH = "Debe Ingresar un Usuario y Contraseña validos para registrarse"
let textI = "Usuario Creado Exitosamente"

function alertA(texto,icono) {
    Swal.fire({
        position: "center",
        icon: icono,
        title: texto,
        showConfirmButton: false,
        timer: 2500
    });
}
