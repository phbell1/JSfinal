


let nuevo_menu = `<h1>Historia Clinica Veterinaria<h1>
<div class="cont-menu">
    <button id="nuevoCli" class="boton-menu" type="button">Nuevo Paciente</button>
    <button id="verReg" class="boton-menu" type="button">Ver Registro</button>
    <button id="salir" class="boton-menu" type="button">Salir</button>
</div>
<button id="bt-modo" class="bt-modo">Modo Dark</button>`



let nuevo_form = `<div class="carga-cust">
<form action="#">
    <h2>Datos Del Cliente</h2>
    <div class="sect-cli">
        <label for="nomCli">Nombre</label>
        <input type="text" id="nomCli" name="nomCli" class="inp">
        <label for="apellido">Apellido</label>
        <input type="text" id="apellido" name="apellido" class="inp">
        <label for="dni">DNI</label>
        <input type="number" id="dni" name="dni" class="inp">
        <label for="tel">Telefono</label>
        <input type="number" id="tel" name="tel" class="inp">
        <label for="mail">E-mail</label>
        <input type="email" id="mail" name="mail" class="inp">
    </div>
    <h2>Datos Mascota</h2>
    <div class="sect-masc">
        <label for="nomMas">Nombre Mascota</label>
        <input type="text" id="nomMas" name="nomMas" class="inp">
        <label for="animal">Animal</label>
        <input type="text" id="animal" name="animal" class="inp">
        <label for="raza">Raza</label>
        <input type="text" id="raza" name="raza" class="inp">
        <label for="edad">Edad</label>
        <input type="text" id="edad" name="edad" class="inp">
        <p>Vacunado</p>
        <div class="cont-radio">
        <input type="radio" id="vac" name="vacunado" value="Si" checked="checked"> <label for="vac">Si</label>
        <input type="radio" id="no-vac" name="vacunado" value="No"> <label for="no-vac">No</label>
        </div>
    </div>
    <div class="con-bot-form">
    <input type="submit" class="botones-form" value="Guardar">
    <input type="reset" class="botones-form" value="Borrar">
    <input type="button" id="vmenu" class="botones-form" value="Menu">
    </div>
</form>
</div>`

let boton_menu = `<div class="con-bot-form">
<button id="vmenu" class="botones-form" type="button">Menu</button>
</div>`