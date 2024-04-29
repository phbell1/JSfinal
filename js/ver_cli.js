function verClientes() {
    if (regCliente.length === 0) {
        alertA(textB, 'error');
    } else {
        let delMenu = document.querySelector('#menu');
        delMenu.remove();

        renderScr('#verClientes', '#main');

        let vMenu = document.querySelector('#vmenu');
        vMenu.addEventListener('click', () => {
            let delMenu = document.querySelector('#menu');
            delMenu.remove();
            menu();
        })

        regCliente.forEach(clientes => {
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


            let clonVerList = document.querySelector('#verList').content.cloneNode(true);
            clonVerList.querySelector('#listN').innerText = lista;
            document.querySelector('#menu').append(clonVerList);

        })
    }

}