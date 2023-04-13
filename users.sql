-- PARA CREAR TABLA
create schema stick;
use `stick`;
create table users (
id int unsigned primary key not null auto_increment,
nombre varchar (20) not null,
email varchar (30) not null,
password varchar (200) not null, -- not null --> no puede no rellenarlo
foto_de_perfil varchar (200),
dni int not null unique,  -- unique --> no se puede repetir en otro usuario
fecha_de_nacimiento date not null,
created_at timestamp default current_timestamp(),
updated_at timestamp default current_timestamp() on update current_timestamp,
deleted_at timestamp null
); 

-- PARA DESCIBIR LAS COLUMNAS DE UNA TABLA
use `stick`;
describe `users`; 

-- PARA AGREGAR UN REGISTRO
use `stick`;
insert into `users` (nombre,email,password, dni, fecha_de_nacimiento)
values ("clara", "cpelletlastra@udesa.edu.ar", "pepegrillo", 45819529, "2004-05-24");

/*USE `stick`;
INSERT INTO `users` (nombre,email,password, dni, fecha_de_nacimiento)
VALUES ("Pilar", "prolon@udesa.edu.ar", "panchoysanti", 45667887, "2003-07-16")*/

/*USE `stick`;
INSERT INTO `users` (nombre,email,password, dni, fecha_de_nacimiento)
VALUES ("Sofia", "sarroyo@udesa.edu.ar", "soficapa", 45786956, "2004-06-17")*/

/*USE `stick`;
INSERT INTO `users` (nombre,email,password, dni, fecha_de_nacimiento)
VALUES ("Lara", "lgrazzini@udesa.edu.ar", "larita123", 45546982, "2004-06-07")*/

/*USE `stick`;
INSERT INTO `users` (nombre,email,password, dni, fecha_de_nacimiento)
VALUES ("Antonella", "aoteguio@udesa.edu.ar", "antu", 45786953, "2003-09-23")*/

USE `stick`;
INSERT INTO `users` (nombre,email,password, dni, fecha_de_nacimiento)
VALUES ("Francesa", "fguadagni@udesa.edu.ar", "casas456", 45785699, "2003-09-01")

