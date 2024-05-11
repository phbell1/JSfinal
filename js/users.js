
let users = [];

function login() {
    let botonLog = document.querySelector('#log-but');
    botonLog.addEventListener('click', () => {
        let name = document.querySelector('#user').value;
        let pass = document.querySelector('#key').value;

        if (name === '' || pass === '') {
            alertA(textF, 'error')
        } else {
            let matchName = users.find((elm) => elm.name === name);
            let matchPass = users.find((elm) => elm.pass === pass);

            if (matchName && matchPass) {
                let delLogin = document.querySelector('#login');
                delLogin.remove();
                alertA(`Bienvenido ${matchName.name}`)
                setTimeout(menu, 2500);
            } else {
                alertA(textG, 'error')
            }
        }
    })
}


function checkUser() {
    let name = document.querySelector('#user').value;
    let pass = document.querySelector('#key').value;
    if (name === '' || pass === '') {
        alertA(textH, 'error')
    } else {

        let registro = {
            name: name,
            pass: pass
        }

        let registrados = users.find((elm) => elm.name === name)
        if (registrados) {
            alertA(`El Usuario ${registrados.name} ya existe`, 'error');
        } else {
            users.push(registro); /*ACA HAY QUE PASARLO AL LOCALSTORAGE PARA ASINCRONICA*/ 
            alertA(textI, 'success');
        }
    }

}

function crearUsuario() {
    let newUser = document.querySelector('#new-user');
    let backBut = document.querySelector('#back-but');
    newUser.addEventListener('click', () => checkUser());
    backBut.addEventListener('click', () => {
        document.querySelector('#register').remove();
        renderScr('#logeo', '#main');
        registrar();
        login();
    });
}

function registrar() {
    let botonReg = document.querySelector('#reg-but');
    let delLogin = document.querySelector('#login');
    botonReg.addEventListener('click', () => {
        delLogin.remove();
        renderScr('#registrar', '#main');
        crearUsuario();
    })
}
