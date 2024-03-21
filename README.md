# Pig Center
Por 
Luis David y
Miguel Bañol

Breve descripción del proyecto.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Configuración](#configuración)
- [Contribución](#contribución)
- [Créditos](#créditos)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Configuraciones:

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


