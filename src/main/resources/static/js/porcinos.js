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
        console.log(data);


        let listadoHtml = '';
        for (let porcino of data) {
            console.log(porcino);
            let porcinoRow='<tr><td>'+porcino.id+'</td><td>' + porcino.race + '</td><td>'+porcino.age + '</td><td>' +porcino.weight + '</td><td>'
                    + porcino.client+'</td><td>Pendiente</td></tr>';
                    listadoHtml+=porcinoRow;
        }

       document.querySelector('#tablePorcino tbody').outerHTML = listadoHtml;
    } catch (error) {
        console.error('Error:', error);
    }
}


     