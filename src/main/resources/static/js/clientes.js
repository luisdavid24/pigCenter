cargarCliemtes();

async function cargarCliemtes() {
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