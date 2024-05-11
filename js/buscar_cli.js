function buscarPaciente() {
    if (regCliente.length === 0) {
        alertA(textB, "error");
    } else {
        let delMenu = document.querySelector('#menu');
        delMenu.remove();

        renderScr('#buscarCli', '#main');

        let vMenu = document.querySelector('#vmenu');
        vMenu.addEventListener('click', () => {
            let delBus = document.querySelector('#busc');
            delBus.remove();
            menu();
        })

        let apellidoBuscado = '';
        let apellidoEncontrado = false;

        let butFind = document.querySelector('#vFind');
        butFind.addEventListener('click', () => {

            let field = document.querySelector('#busApe').value;
            if (field === '') {
                alertA(textC, "error");
            } else {
                if (apellidoBuscado === field && apellidoEncontrado) {
                    alertA(textD, "error");
                } else {
                    apellidoBuscado = field;
                    let result = regCliente.filter((elm) => elm.clie.apellido === field);
                    if (result.length === 0) {
                        alertA(textE, "error");
                    } else {
                        result.forEach(clientes => {
                            lista = ` Cliente: ${clientes.clie.id}
                            - Nombre: ${clientes.clie.nombre} 
                            - Apellido: ${clientes.clie.apellido}
                            - DNI: ${clientes.clie.dni}
                            - Telefono: ${clientes.clie.tel}
                            - Mail: ${clientes.clie.mail}
                          Mascota:
                            - Nombre: ${clientes.masc.nombre}
                            - Tipo: ${clientes.masc.animal}
                            - Raza: ${clientes.masc.raza}
                            - Edad: ${clientes.masc.edad}
                            - Vacunado: ${clientes.masc.vacunado}`;
                            let clonBusClie = document.querySelector('#verList').content.cloneNode(true);
                            clonBusClie.querySelector('#listN').innerText = lista;
                            document.querySelector('#busc').append(clonBusClie);
                        })
                        apellidoEncontrado = true;
                    }
                }
            }

        })
    }

}