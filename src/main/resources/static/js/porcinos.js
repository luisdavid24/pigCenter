cargarUsuarios();

async function cargarUsuarios() {
    try {
        const request = await fetch('http://localhost:8080/porcino', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
           
        });
        const data = await request.json();
        //console.log(data);


        let listadoHtml = '';
        for (let porcino of data) {
            let porcinoRow='<tr><td>'+porcino.id+'</td><td>' + porcino.race + '</td><td>'+porcino.age + '</td><td>' +porcino.weight + '</td><td>'
                    + porcino.client+'</td><td>Pendiente</td></tr>';
                    listadoHtml+=porcinoRow;
        }

       document.querySelector('#tablePorcino tbody').outerHTML = listadoHtml;
    } catch (error) {
        console.error('Error:', error);
    }
}

    


async function crearPorcino() {
    try {

        let nuevoPorcino = {};
        nuevoPorcino.race = document.getElementById('opcionesPorcino').value;
        nuevoPorcino.age = document.getElementById('textEdadPorcino').value;
        nuevoPorcino.weight = document.getElementById('textPesoPorcino').value;
      
        // const nuevoPorcino = {
        //     race: 'Raza del porcino',
        //     age: 1, // Edad del porcino
        //     weight: 100, // Peso del porcino
        //     client: 'Cliente' // Nombre del cliente
        // };

        const request = await fetch('http://localhost:8080/porcino', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoPorcino)
        });

        if (request.ok) {
            console.log('Porcino creado exitosamente');
            console.log(nuevoPorcino);

            // Llamar a la función cargarUsuarios después de crear el porcino
            cargarUsuarios();
        } else {
            throw new Error('Error al crear el porcino');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}


     