# Pig Center
Por 
Luis David y
Miguel Bañol

Breve descripción del proyecto.


La Granja S.A, un centro porcino, necesitaba una solución web que implementara el patrón de diseño Modelo-Vista-Controlador (MVC). Este proyecto surgió como respuesta a los desafíos planteados por La Granja S.A.

## Tabla de Contenidos

- [Configuración](#configuración)
- [Uso](#uso)
- [Tecnologia](#Tecnologia)
- [Contacto](#contacto)

## Configuración:

1. La base de datos: Debes tener un postgrest y debes crear una db con el nombre pigCenter, la creacion de las tablas lo realizara Spring boot
2. Deber de correr el siguiente script para la db:
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

-Spring Boot
-Bootstrap
-Chart.js
-HTML
-CSS
## Contacto

Si tienes alguna pregunta, comentario o sugerencia sobre el proyecto, no dudes en ponerte con nosotros.

- Nombre: Luis David
- Correo Electrónico: luis_lopez82201@elpoli.edu.co

  
- Nombre: Miguel bañol
- Correo Electrónico: miguel_banol82201@elpoli.edu.co


