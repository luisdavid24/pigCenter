# Pig Center
Por 
Luis David y
Miguel Bañol

 ## Breve descripción del proyecto.


La Granja S.A, un centro porcino, necesitaba una solución web que implementara el patrón de diseño Modelo-Vista-Controlador (MVC). Este proyecto surgió como respuesta a los desafíos planteados por La Granja S.A.

## Tabla de Contenidos

- [Configuración](#configuración)
- [Uso](#uso)
- [Tecnologia](#Tecnologia)
- [Diagrama](#Diagrama)
- [Contacto](#contacto)

## Configuración:

1. Configuración de la base de datos:
   - Antes de comenzar, asegúrate de tener PostgreSQL instalado en tu máquina.Deberas cambiar la configuracion del archivo 'application.properties'.
   - Debes crear una base de datos con el nombre 'pigCenter'. La creación de las tablas será realizada por Spring Boot durante el proceso de ejecución.

2. Ejecución del script de la base de datos:

 ```sql
INSERT INTO public.client(
	adress, last_name, name, phone)
	VALUES ('Calle Primavera 123, Ciudad Esperanza, Estado del Sol, Mexico.','Lopez', 'David','3504792685');
INSERT INTO public.client(
	adress, last_name, name, phone)
	VALUES ('Avenida de los Robles 456, Pueblo Verde, Provincia de la Montana, Espana.','Aurelius', 'Marcus','3504788182');
INSERT INTO public.client(
 	adress, last_name, name, phone)
	VALUES ('Main Street 789, Willow Grove, New York, USA.','Cato', 'Julius','3504792777');
-- Ahora porcino
INSERT INTO public.porcine(
	age,weight,race)
	VALUES (1,2.5, 'york');
INSERT INTO public.porcine(
	age,weight,race)
	VALUES (1,2.5, 'york');
INSERT INTO public.porcine(
	age,weight,race)
	VALUES (1,2.5, 'hamp');
INSERT INTO public.porcine(
	age,weight,race)
	VALUES (1,2.5, 'duroc');

-- aqui la parte de los Feeding
INSERT INTO public.feeding(
	dose, description)
	VALUES (12, 'Granos');
INSERT INTO public.feeding(
	dose, description)
	VALUES (14, 'Vegetales');
INSERT INTO public.feeding(
	dose, description)
	VALUES (2, 'Frutas');
INSERT INTO public.feeding(
	dose, description)
	VALUES (8, 'Alimentos procesados');
```
## Uso:
El desarrollo del proyecto está consolidado en la rama 'devBack'. Para utilizar el proyecto, primero debes ejecutar el backend (implementado en Spring Boot) y luego ejecutar el archivo SQL para configurar la base de datos. Después, puedes iniciar el frontend utilizando un servidor en vivo (live server).

## Tecnologia
Las tecnologías utilizadas en el proyecto fueron:

- Spring Boot
- Bootstrap
- Chart.js
- HTML
- CSS

## Diagrama
Si desea observar el diagrama de clases del proyecto, da click al siguiente link:
https://drive.google.com/file/d/1c9ihgeT8BkEReCVcwuCx47P5MyLD7zlT/view?usp=drive_link


## Contacto

Si tienes alguna pregunta, comentario o sugerencia sobre el proyecto, no dudes en ponerte con nosotros.

- Nombre: Luis David
- Correo Electrónico: luis_lopez82201@elpoli.edu.co
- - Nombre: Miguel bañol
- Correo Electrónico: miguel_banol82201@elpoli.edu.co

