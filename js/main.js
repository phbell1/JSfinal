
// Tercera Pre Entrega JS

var regCliente = [];

class Cliente {
    constructor(nombre, apellido, dni, tel, mail) {
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.tel = tel
        this.mail = mail
    }
}

class Mascota {
    constructor(nombre, animal, raza, edad, vacunado) {
        this.nombre = nombre
        this.animal = animal
        this.raza = raza
        this.edad = edad
        this.vacunado = vacunado
    }
}

checkMode();

let nClie = document.querySelector('#nuevoCli');
nClie.addEventListener('click', crearCliente);


let vReg = document.querySelector('#verReg');
vReg.addEventListener('click', verClientes);

document.querySelector('#salir').addEventListener('click', () => {
    window.close();

})



function crearCliente() {
    let delMenu = document.querySelector('#menu');
    delMenu.remove();

    let loadForm = document.createElement('section');
    loadForm.innerHTML = nuevo_form;
    loadForm.classList.add('new-cust');
    loadForm.id = 'new-cust';
    document.body.append(loadForm);

    let form = document.querySelector('form');
    form.addEventListener('submit', (evt) => {
        evt.preventDefault();

        let nomCli = document.querySelector('#nomCli').value;
        let apellido = document.querySelector('#apellido').value;
        let dni = Number(document.querySelector('#dni').value);
        let tel = Number(document.querySelector('#tel').value);
        let mail = document.querySelector('#mail').value;

        let nomMas = document.querySelector('#nomMas').value;
        let animal = document.querySelector('#animal').value;
        let raza = document.querySelector('#raza').value;
        let edad = Number(document.querySelector('#edad').value);
        let vacunado = document.querySelector('input[name="vacunado"]:checked').value;

        let clie = new Cliente(nomCli, apellido, dni, tel, mail);
        let masc = new Mascota(nomMas, animal, raza, edad, vacunado);

        let addReg = { clie, masc };


        regCliente.push(addReg);
        alert('Cliente Agregado Exitosamente');
        document.querySelector('form').reset();
        let delForm = document.querySelector('#new-cust');
        delForm.remove();
        volverMenu();


    })

    let vMenu = document.querySelector('#vmenu');
    vMenu.addEventListener('click', () => {
        let delForm = document.querySelector('#new-cust');
        delForm.remove();
        volverMenu();

    });

}


function verClientes() {
    if (regCliente.length === 0) {
        alert('No Hay Ningun Cliente Registrado');
    } else {
        let verNomCli;
        let verApellido;
        let verDni;
        let verTel;
        let verMail;
        let verNomMasc;
        let verAnimal;
        let verRaza;
        let verEdad;
        let verVacunado;

        let s1 = document.querySelector('h1');
        let s2 = document.querySelector('.cont-menu');
        let s3 = document.querySelector('#menu');

        s2.remove();
        s3.classList.remove('menu');
        s3.classList.add('listado');
        s1.innerText = "Registro de Clientes"

        s3.children[1].innerHTML = boton_menu;

        let vMenu = document.querySelector('#vmenu');
        vMenu.addEventListener('click', () => {
            let delMenu = document.querySelector('#menu');
            delMenu.remove();
            volverMenu();
        });


        for (let i = 0; i < regCliente.length; i++) {
            verNomCli = regCliente[i].clie.nombre;
            verApellido = regCliente[i].clie.apellido;
            verDni = regCliente[i].clie.dni;
            verTel = regCliente[i].clie.tel;
            verMail = regCliente[i].clie.mail;

            verNomMasc = regCliente[i].masc.nombre;
            verAnimal = regCliente[i].masc.animal;
            verRaza = regCliente[i].masc.raza;
            verEdad = regCliente[i].masc.edad;
            verVacunado = regCliente[i].masc.vacunado;


            let lista = ` Cliente: ${[i + 1]}
                            - Nombre: ${verNomCli} 
                            - Apellido: ${verApellido}
                            - DNI: ${verDni}
                            - Telefono: ${verTel}
                            - Mail: ${verMail}
                          Mascota:
                            - Nombre: ${verNomMasc}
                            - Tipo: ${verAnimal}
                            - Raza: ${verRaza}
                            - Edad: ${verEdad}
                            - Vacunado: ${verVacunado}`;

            let s4 = document.createElement('div');
            s4.innerText = lista;
            s4.classList.add('listN');
            s3.append(s4);
        }

    }
}

function volverMenu() {
    let loadMenu = document.createElement('section');
    loadMenu.innerHTML = nuevo_menu;
    loadMenu.classList.add('menu');
    loadMenu.classList.add('bg-light');
    loadMenu.id = 'menu';
    document.body.append(loadMenu);

    let nClie = document.querySelector('#nuevoCli');
    nClie.addEventListener('click', crearCliente);

    let vReg = document.querySelector('#verReg');
    vReg.addEventListener('click', verClientes);

    document.querySelector('#salir').addEventListener('click', () => {
        window.close();
    })

    checkMode();

}

function checkMode() {
    if (localStorage.getItem('modo-inicio')) {
        let verModo = localStorage.getItem('modo-inicio');
        let btMode = document.querySelector('#menu');
        btMode.classList.add(verModo);
    }

    let btnMode = document.querySelector('#bt-modo');

    btnMode.addEventListener('click', () => {
        let mod = document.querySelector('#menu').classList.value;
        if (mod == 'menu bg-dark') {
            document.querySelector('#menu').classList.value = 'menu bg-light';
            localStorage.setItem('modo-inicio', 'bg-light');
            btnMode.innerText = 'Modo Light';
        } else {
            document.querySelector('#menu').classList.value = 'menu bg-dark';
            localStorage.setItem('modo-inicio', 'bg-dark');
            btnMode.innerText = 'Modo Dark';

        }

    })

}

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