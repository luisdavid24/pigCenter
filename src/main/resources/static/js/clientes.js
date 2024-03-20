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
        data=quitarAdrres(data);
        let listadoHtml = '';
        for (let cliente of data) {
            let btnEliminar = '<a class="btn btn-danger btn-circle btn-sm" onclick="eliminarCliente(' + cliente.id + ')" >Eliminar<i class="fas fa-trash"></i></a>';
            let bntEditar=" editar";
           
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
            document.getElementById('textDireccionCliente').value='';
            document.getElementById('textNombreCliente').value='';
            document.getElementById('textApellidosCliente').value='';
            document.getElementById('textTelefonoCliente').value='';
        } else {
            throw new Error('Error al crear el porcino');
        }
    } catch (error) {
        console.error('Error:', error);
    }
    
 
}


async function eliminarCliente(id) {

    try {
        const request = await fetch('http://localhost:8080/client/'+id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
           
        });
        cargarClientes();
        

    } catch (error) {
        console.error('Error:', error);
    }
}
