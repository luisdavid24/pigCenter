cargerAlimentacion();
let alimentacionGlobal=null;



async function cargerAlimentacion() {
    

    try {
        const requestPorcino = await fetch('http://localhost:8080/porcino', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
           
        });
        let dataPorcino = await requestPorcino.json();

        const request = await fetch('http://localhost:8080/feeding', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
           
        });
        let data = await request.json();
        console.log(data);
        
        let listadoHtml = '';
        for (let alimento of data) {
            let porcino="Falta";
            if(alimento.porcine!=null){
                for (let elementoPorcino of dataPorcino) {
                    if(elementoPorcino.id==alimento.porcine.id){
                        porcino=elementoPorcino.id+" "+elementoPorcino.race;
                        break;
                    }
                }

            }
        

            let btnEliminar = '<a class="btn btn-danger btn-circle btn-sm" onclick="eliminarCliente(' + alimento.id + ')"  >Eliminar<i class="fas fa-trash"></i></a>';
            let bntEditar = '<a class="btn btn-primary" type="button" data-toggle="modal" data-target="#clienteModalEditar" onclick="editarCliente(' + alimento.id + ')"  >Editar<i class="fas fa-trash"></i></a>';
            
            
            let clienteRow='<tr><td>'+alimento.id+'</td><td>' + alimento.description + '</td><td>'+alimento.dose + '</td><td>' +porcino + '</td><td>'
                    + bntEditar+btnEliminar+'</td></tr>';
            listadoHtml+=clienteRow;
            
        }

       document.querySelector('#tableCliente tbody').outerHTML = listadoHtml;
    
       
    } catch (error) {
        console.error('Error:', error);
    }
}

async function crearAlimentacion(){
   
    try {

        const requestPorcino = await fetch('http://localhost:8080/porcino', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
           
        });
        let dataPorcino = await requestPorcino.json();
        let nuevoAlimentacion = {};
        nuevoAlimentacion.description = document.getElementById('textDescripcion').value;
        nuevoAlimentacion.dose = document.getElementById('textDose').value;
        let idPorcino = document.getElementById('opcionesAlimentacion').value
        for (let element of dataPorcino) {
            if(element.id==idPorcino){
                nuevoAlimentacion.porcine=element;

            }
        }
        
        
        console.log(nuevoAlimentacion);
        
        const request = await fetch('http://localhost:8080/feeding', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoAlimentacion)
        });

        if (request.ok) {
            let boton = document.getElementById("btnClose");
            boton.click();
            cargerAlimentacion();
            document.getElementById('textDescripcion').value='';
            document.getElementById('textDose').value='';
            document.getElementById('opcionesAlimentacion').value='';
        } else {
            throw new Error('Error al crear el porcino');
        }
    } catch (error) {
        console.error('Error:', error);
    }
    
 
}

async function cargarPorcinosModal(){
    try {
        const request = await fetch('http://localhost:8080/feeding', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
           
        });
        let data = await request.json();
       
        
        let listaPorcino=[];
        for (let element of data) {
            if(element.porcine!=null){
                listaPorcino.push(element.porcine);
            }
        }
        const requestPorcino = await fetch('http://localhost:8080/porcino', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
           
        });
        let dataPorcino = await requestPorcino.json();
        let selectElement = document.getElementById('opcionesAlimentacion');
        selectElement.innerHTML = '';
        
        for (let porcino of dataPorcino) {
            let Bandera=true;
            for (let porcinoListo of listaPorcino) {
                if(porcino.id==porcinoListo.listaPorcino){
                    Bandera=false;
                    break
                }
            }
            if(Bandera){
                let optionElement = document.createElement('option');
                optionElement.value = porcino.id; 
                optionElement.textContent = porcino.id+porcino.race ;
                selectElement.appendChild(optionElement);

            }
            
        }
        let optionElement = document.createElement('option');
        optionElement.value =null; 
        optionElement.textContent = "Null" ;
        selectElement.appendChild(optionElement);

      
       
    } catch (error) {
        console.error('Error:', error);
    }

}


async function eliminarCliente(id) {

    try {
        const request = await fetch('http://localhost:8080/feeding/'+id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
           
        });
        cargerAlimentacion();
        

    } catch (error) {
        console.error('Error:', error);
    }
}


async function editarCliente(id){
    try {
        const request = await fetch('http://localhost:8080/feeding/'+id, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
               
            });
        let data = await request.json();
        alimentacionGlobal=data;
        console.log(data);

        const requestPorcino = await fetch('http://localhost:8080/porcino', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
           
        });
        let dataPorcino = await requestPorcino.json();

        const request2 = await fetch('http://localhost:8080/feeding', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
           
        });
        let dataUpdate = await request2.json();
       
        
        let listaPorcino=[];
        for (let element of dataUpdate) {
            if(element.porcine!=null){
                listaPorcino.push(element.porcine);
            }
        }

        let selectElementAlimentacion = document.getElementById('opcionesAlimentacionEditar');
        selectElementAlimentacion.innerHTML = '';
        
       
        for (let porcino of dataPorcino) {
            let Bandera=true;
            for (let porcinoListo of listaPorcino) {
                if(porcino.id==porcinoListo.listaPorcino){
                    Bandera=false;
                    break
                }
            }
            if(Bandera){
                let optionElement = document.createElement('option');
                optionElement.value = porcino.id; 
                optionElement.textContent = porcino.id+porcino.race ;
                selectElementAlimentacion.appendChild(optionElement);

            }
            
        }
        let optionElement = document.createElement('option');
        optionElement.value =null; 
        optionElement.textContent = "Null" ;
        selectElementAlimentacion.appendChild(optionElement);
      
        

    } catch (error) {
        console.error('Error:', error);
    }

    
    
}

async function GuardarEditarPorcino() {
    let description= document.getElementById('textDescripcionEdit').value;
    let dose = document.getElementById('textDoseEdit').value;
    let porcineID = document.getElementById('opcionesAlimentacionEditar').value;
    
    
    const requestPorcino = await fetch('http://localhost:8080/porcino', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
       
    });
    let dataPorcino = await requestPorcino.json();
   
    if(description){
        alimentacionGlobal.description=description;
    }
   
    if(dose){
        alimentacionGlobal.dose=dose;
    }
    
   

    if(porcineID){
        for (let element of dataPorcino) {
            if(porcineID==element.id){
                
                //delete client.address;
                alimentacionGlobal.porcine=element;
                break;
            }
        }
        
    }
    console.log(alimentacionGlobal);
    
    const request = await fetch('http://localhost:8080/feeding/'+alimentacionGlobal.id, {
        method: 'PUT', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(alimentacionGlobal)
    });
    cargerAlimentacion();
    
    
    
    
}



async function generarReportePorcino() {

   

    try {
        let dataInnerJoin=null;
        const responseNew = await fetch( 'http://localhost:8080/feeding', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        dataInnerJoin = await responseNew.json();
        const request = await fetch('http://localhost:8080/client', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
           
        });
        const data = await request.json();
        
      
        let namesVector=[];
        let dataVector=[];
        for (let clienteElement of data) {
            let number=0;
            namesVector.push(clienteElement.name +" "+clienteElement.lastName )

            for (let element of dataInnerJoin) {
                if(clienteElement.id==element.client.id){
                     console.log(element);
                    number++;
                }
            }
            dataVector.push(number);
            number=0;
        }
        console.log(namesVector);

        
        var ctx = document.getElementById('tortaCliente').getContext('2d');
        var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
        labels: namesVector,
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

        
    } catch (error) {
        console.error('Error:', error);
    }
}