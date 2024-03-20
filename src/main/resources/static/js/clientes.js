cargarClientes();

async function cargarClientes() {
    try {
        const request = await fetch('http://localhost:8080/client', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
           
        });
        let data = await request.json();
        console.log(data);
        data=quitarAdrres(data);
        console.log(data);
        let listadoHtml = '';
        for (let cliente of data) {
            let bntEditar=" editar";
            let btnEliminar=" eliminar";
            let clienteRow='<tr><td>'+cliente.id+'</td><td>' + cliente.name + '</td><td>'+cliente.lastName + '</td><td>' +cliente.address + '</td><td>'
                    + cliente.phone+'</td><td>' + bntEditar+btnEliminar + '</td></tr>';
                    listadoHtml+=clienteRow;
            
        }

       document.querySelector('#tableCliente tbody').outerHTML = listadoHtml;
       
    } catch (error) {
        console.error('Error:', error);
    }
}
function quitarAdrres(vector){
    for (let elemento of vector) {
        delete elemento.address;
    }
    return vector;
    
}

async function crearCliente(){
    
    try {

        let nuevoCliente = {};
        nuevoCliente.address = document.getElementById('textDireccionCliente').value;
        nuevoCliente.name = document.getElementById('textNombreCliente').value;
        nuevoCliente.lastName = document.getElementById('textApellidosCliente').value;
        nuevoCliente.phone=document.getElementById('textTelefonoCliente').value;
        nuevoCliente.porcines=[];
        
        const request = await fetch('http://localhost:8080/client', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoCliente)
        });

        if (request.ok) {
            let boton = document.getElementById("btnClose");
            boton.click();
            cargarClientes();
        } else {
            throw new Error('Error al crear el porcino');
        }
    } catch (error) {
        console.error('Error:', error);
    }
    
 
}