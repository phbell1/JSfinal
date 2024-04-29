
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


menu();

function menu() {
    renderScr('#t-menu', '#main');

    let nClie = document.querySelector('#nuevoCli');
    nClie.addEventListener('click', crearCliente);

    let vReg = document.querySelector('#verReg');
    vReg.addEventListener('click', verClientes);

    let bPac = document.querySelector('#busCli');
    bPac.addEventListener('click', buscarPaciente);

    document.querySelector('#salir').addEventListener('click', () => window.close());

    checkMode();

}


// FUNCION QUE RENDERIZA TEMPLATE POR ARGUMENTO EN BASE A SU ID Y AL SELECTOR DEL NODO DESEADO
function renderScr(idTemp, selector) {
    let template = document.querySelector(idTemp).content.cloneNode(true);
    document.querySelector(selector).append(template);
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

