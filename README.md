# Pig Center
Por 
Luis David y
Miguel Bañol

Breve descripción del proyecto.

La Granja S.A. es un centro porcino requeria una solución web que utilice el Modelo por capas (Modelo Vista Controlador). Este proyecto fue la respuesta a esta problematica planteada por Granja S.A.

## Tabla de Contenidos

- [Configuración](#configuración)
- [Uso](#uso)
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
Al momento de usar el proyecto debes primer correr el backend (hecho en spring boot) y luego correr el archivo de sql para tener la base de datos, para luego por medio de live server correr el fronted.


## Contacto

Si tienes alguna pregunta, comentario o sugerencia sobre el proyecto, no dudes en ponerte con nosotros.

- Nombre: Luis David
- Correo Electrónico: luis_lopez82201@elpoli.edu.co

  
- Nombre: Miguel bañol
- Correo Electrónico: miguel_banol82201@elpoli.edu.co


