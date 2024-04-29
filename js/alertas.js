
let textA = "Cliente Agregado Exitosamente"
let textB = "No Hay Ningun Cliente Registrado"
let textC = "Debe Ingresar el Apellido del Cliente a Buscar"
let textD = "El Cliente Ya Ha Sido Visualizado"
let textE = "Cliente No Registrado"

function alertA(texto,icono) {
    Swal.fire({
        position: "center",
        icon: icono,
        title: texto,
        showConfirmButton: false,
        timer: 2000
    });
}