 create schema `stick`;
use `stick`;
 CREATE TABLE `productos`(
 id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
 users_id INT UNSIGNED NOT NULL,
 nombre VARCHAR(50) NOT NULL,
 descripcion TEXT NOT NULL,
 created_at timestamp default current_timestamp,
 updated_at timestamp default current_timestamp on update current_timestamp,
 deleted_at timestamp null,
 CONSTRAINT fk_productos_users FOREIGN KEY(users_id) REFERENCES users(id)

); 

USE `stick`;
INSERT INTO `productos`(users_id, nombre, descripcion) 
VALUES (1, "Palo de Hockey Grays", "El Grays Blast Ultrabow Pink / Teal es el palo de inicio perfecto para los niños y cualquiera que esté comenzando su carrera en el hockey. El palo de hockey Blast tiene un mango de gamuza de color que hace que usar el palo sea una experiencia cómoda.");


INSERT INTO `productos`(users_id, nombre, descripcion) 
VALUES (3, "Canilleras malik", "Conocé las Canilleras Malik Club 8 Protección, ideales para cuidarte en cada enfrentamiento con el oponente. Diseñadas en una estructura curva y anatómica que se adapta a las piernas perfecta y cómodamente, tienen un ajuste de correas para facilitar el poner y sacar");



INSERT INTO `productos`(users_id, nombre, descripcion) 
VALUES (4,"Protector bucal Gilbert","Minimizá el riesgo de lesiones con el Protector bucal Gilbert Viper Pro 3. Su simplicidad en el diseño permite una perfecta adaptación a cada tipo de dentadura, impidiendo los golpes y reduciendo las vibraciones para mayor cuidado en el campo de juego.");


INSERT INTO `productos`(users_id, nombre, descripcion) 
VALUES (5,"Funda TK","La imbatible TK 3.3 ofrece una solución efectiva en todos los entornos, con un compartimiento para palo, 2 compartimientos frontales separados, y una única tira trasera.");


INSERT INTO `productos`(users_id, nombre, descripcion) 
VALUES (6,"Cubre canilleras","Protegen la piel del roce generado por la canillera durante el entrenamineto y partido. Ofrecen una buena elasticidad y una leve compresion.");


INSERT INTO `productos`(users_id, nombre, descripcion) 
VALUES (3,"Tartaneras addidas","Es un botín clásico, tradicional en su perfil de cosmética, ampliamente testeado en calidad y duración. Está realizado en materiales sintéticos sin costuras y con detalles de alta frecuencia, lo que hace liviano y cómodo.");



INSERT INTO `productos`(users_id, nombre, descripcion) 
VALUES (1,"Bocha de hockey Drial","Bochas profesionales, estructura confeccionada en una sola pieza hueca, 0% absorción de agua y humedad.");


INSERT INTO `productos`(users_id, nombre, descripcion) 
VALUES (1,"Guante Vlack","De la línea de guantes Brabo, el F5 es un guante confeccionado en tela y con protecciones de plástico moldeado. Es abierto, lo cual brinda mucha comodidad al jugador para que pueda seguir sintiendo el mango del palo con la palma de la mano.");


INSERT INTO `productos`(users_id, nombre, descripcion) 
VALUES (3,"Guante Drial de arqueros","Fabricado con goma spum de alta densidad, con terminaciones de calidad. Todos nuestros productos poseen 90 días de garantía por defectos de fabricación, desde la fecha de compra.");


INSERT INTO `productos`(users_id, nombre, descripcion) 
VALUES (4,"Palo balling","El nuevo Alpha 100 Xtreme Groove Lowbow fue diseñado para arrastradores en busca de sumar potencia a sus tiros y progresar en sus habilidades aereas.");

