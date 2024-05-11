
// Proyecto Final JS

var regCliente = [];

class Cliente {
    constructor(idNum, nombre, apellido, dni, tel, mail) {
        this.id = idNum
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

renderScr('#logeo', '#main');
login();
registrar();


function menu() {
    renderScr('#t-menu', '#main');

    let nClie = document.querySelector('#nuevoCli');
    nClie.addEventListener('click', crearCliente);

    let vReg = document.querySelector('#verReg');
    vReg.addEventListener('click', verClientes);

    let bPac = document.querySelector('#busCli');
    bPac.addEventListener('click', buscarPaciente);

    let salir = document.querySelector('#menu')
    document.querySelector('#salir').addEventListener('click', () => {
        salir.remove();
        alertA(`Cerrando Sesion`)
        setTimeout(function () {
            renderScr('#logeo', '#main')
            login();
            registrar();
        }, 2800);

    });

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

