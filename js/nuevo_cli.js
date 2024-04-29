function crearCliente() {
    let delMenu = document.querySelector('#menu');
    delMenu.remove();

    renderScr('#new-form', '#main');

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
        let numCliente;
        let clie = new Cliente(numCliente, nomCli, apellido, dni, tel, mail);
        let masc = new Mascota(nomMas, animal, raza, edad, vacunado);

        let addReg = { clie, masc };
        regCliente.push(addReg);

        regCliente.forEach((elm, index) => {
            elm.clie.id = ++index;
        })

        alertA(textA,'success');

        document.querySelector('form').reset();
        let delForm = document.querySelector('#new-cust');
        delForm.remove();
        menu();
    })


    // BOTON VOLVER MENU EN FORM
    let vMenu = document.querySelector('#vmenu');
    vMenu.addEventListener('click', () => {
        let delForm = document.querySelector('#new-cust');
        delForm.remove();
        menu();

    });

}