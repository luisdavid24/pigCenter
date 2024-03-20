cargarPorcinos();
document.addEventListener("DOMContentLoaded", function() {
    generarReportePorcino();
    
});

let porcinoEditGlobal=null;
let vectorCliente=null;

async function cargarPorcinos() {
    try {
        const request = await fetch('http://localhost:8080/porcino', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
           
        });
        let data = await request.json();
       
        let listadoHtml = '';
        for (let porcino of data) {
            let botonEliminar = '<a class="btn btn-danger btn-circle btn-sm" onclick="eliminarPorcino(' + porcino.id + ')" >Eliminar<i class="fas fa-trash"></i></a>';
            let botonEditar = '<a class="btn btn-primary" type="button" data-toggle="modal" data-target="#editarPorcino" onclick=" editar('+ porcino.id +')" >Editar<i class="fas fa-trash"></i></a>';
            let cliente="No tiene";
            if(porcino.client!=null){
                cliente=porcino.client.name+"<br>"+porcino.client.lastName;
            }
            let porcinoRow='<tr><td>'+porcino.id+'</td><td>' + porcino.race + '</td><td>'+porcino.age + '</td><td>' +porcino.weight + '</td><td>'
                    + cliente+'</td><td>'+botonEliminar+" "+botonEditar+'</td></tr>';
                    listadoHtml+=porcinoRow;
        }

       document.querySelector('#tablePorcino tbody').outerHTML = listadoHtml;
       generarReportePorcino();
    } catch (error) {
        console.error('Error:', error);
    }
}

    

async function editar(id){
    try {
        const request = await fetch('http://localhost:8080/porcino', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
               
            });
        let data = await request.json();
        for (let elemento of data) {
            if(elemento.id==id){
                porcino=elemento;
            }
        }
        porcinoEditGlobal=porcino;

    } catch (error) {
        console.error('Error:', error);
    }

    try {
        const request = await fetch('http://localhost:8080/client', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
               
            });
        let dataClient = await request.json();
        vectorCliente=dataClient;
        let listadoHtml = '';
      

        let selectElement = document.getElementById('opcionesPorcinoEditClient');

        selectElement.innerHTML = '';

        for (let client of dataClient) {
            let optionElement = document.createElement('option');
            optionElement.value = client.id; 
            optionElement.textContent = client.name;
            selectElement.appendChild(optionElement);
        }
        
       
    } catch (error) {
        console.error('Error:', error);
    }
}
async function GuardarEditarPorcino() {
    let age = document.getElementById('textEdadPorcinoEdit').value;
    let race = document.getElementById('opcionesPorcinoEdit').value;
    let weight = document.getElementById('textPesoPorcinoEdit').value;
    let idCliente=document.getElementById('opcionesPorcinoEditClient').value;
   
    if(age){
        porcinoEditGlobal.age=age;
    }
    if(race){
        porcinoEditGlobal.race=race;
    }
    if(weight){
        porcinoEditGlobal.weight=weight;
    }
    if(idCliente){
        for (let client of vectorCliente) {
            if(idCliente==client.id){
                
                delete client.address;
                porcinoEditGlobal.client=client;
                break;
            }
        }
        
    }
    
    const request = await fetch('http://localhost:8080/porcino/'+porcinoEditGlobal.id, {
        method: 'PUT', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(porcinoEditGlobal)
    });
    cargarPorcinos();
    
    
}



async function eliminarPorcino(id) {

    try {
        const request = await fetch('http://localhost:8080/porcino/'+id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
           
        });
        cargarPorcinos();
        

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
        nuevoPorcino.client=null;
        
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
            

            cargarPorcinos();
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
        let edades=[0,1,2,3];
        let cantidad=[];

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
           if(!edades.includes(porcino.age)){
             edades.push(porcino.age);
           }
        }

        for (let edad of edades) {
            let elemento=0;
            for (let porcino of data) {
                if(porcino.age==edad){
                    elemento++;
                }

            }
            cantidad.push(elemento);

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
            legend: {
                labels: {
                    fontColor: 'red' // Cambia el color de la letra en la leyenda
                }
            }
            
        }
        });



        var datos = {
            labels: edades,
            datasets: [{
                label: 'Edad',
                backgroundColor: 'rgba(180, 144, 202, 1)',
                borderColor: 'rgba(0, 0, 255, 1)',
                borderWidth: 1,
                data: cantidad
            }]
        };
        var opciones = {
            
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: 'red' // Cambia el color de las etiquetas en el eje y
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: 'blue' // Cambia el color de las etiquetas en el eje x
                    }
                }]
            }
        };
        
       
        var ctx = document.getElementById('barrasPorcino').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: datos,
            options: opciones
        });

        
    } catch (error) {
        console.error('Error:', error);
    }
}
async  function generarReporte(){
   
        var contenido = document.getElementById('containerReport');
        if (contenido.style.display === 'none') {
            contenido.style.display = 'block'; 
        } else {
            contenido.style.display = 'none'; 
        }



}

