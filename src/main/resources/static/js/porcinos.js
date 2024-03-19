cargarUsuarios();
document.addEventListener("DOMContentLoaded", function() {
    generarReportePorcino();

});


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
            let boton = document.getElementById("btnClose");
            boton.click();
            

            cargarUsuarios();
        } else {
            throw new Error('Error al crear el porcino');
        }
    } catch (error) {
        console.error('Error:', error);
    }
    
 
}



async function generarReportePorcino() {
    try {
        const request = await fetch('http://localhost:8080/porcino', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
           
        });
        const data = await request.json();
        let cantidadYork=0;
        let cantidadHamp=0;
        let cantidadDuroc=0;

        for (let porcino of data) {
            if(porcino.race=="york"){
            cantidadYork++;
           }
           if(porcino.race=="hamp"){
            cantidadHamp++;
           }
           if(porcino.race=="duroc"){
            cantidadDuroc++;
           }
        }
        document.querySelector('#yorkTd').outerHTML ='<td>'+cantidadYork+'</td>';
        document.querySelector('#hampTd').outerHTML ='<td>'+cantidadHamp+'</td>';
        document.querySelector('#durocTd').outerHTML ='<td>'+cantidadDuroc+'</td>';

        let dataVector={};
        dataVector[0]=cantidadYork;
        dataVector[1]=cantidadHamp;
        dataVector[2]=cantidadDuroc;


        var ctx = document.getElementById('torta').getContext('2d');
        var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
        labels: ['york', 'hamp', 'duroc'],
        datasets: [{
            label: '# of Votes',
            data: dataVector,
            backgroundColor: [
            'rgba(128, 0, 128, 1)',
            'rgba(127, 255, 212, 1)',
            'rgba(180, 144, 202, 1)'
            ],
            borderColor: [
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 255, 1)'
            ],
            borderWidth: 1
        }]
        },
        options: {
        // Aquí puedes personalizar opciones adicionales, como la leyenda, el título, etc.
        }
        });
        
    } catch (error) {
        console.error('Error:', error);
    }
}


