 create schema `stick`;
use `stick`;
 CREATE TABLE `productos`(
 id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
 users_id INT UNSIGNED NOT NULL,
 nombre VARCHAR(50) NOT NULL,
 descripcion TEXT NOT NULL,
 image VARCHAR(300) NOT NULL,
 created_at timestamp default current_timestamp,
 updated_at timestamp default current_timestamp on update current_timestamp,
 deleted_at timestamp null,
 CONSTRAINT fk_productos_users FOREIGN KEY(users_id) REFERENCES users(id)

); 

USE `stick`;
INSERT INTO `productos`(users_id, nombre, descripcion, image) 
VALUES (1, "Palo de Hockey Grays", "El Grays Blast Ultrabow Pink / Teal es el palo de inicio perfecto para los niños y cualquiera que esté comenzando su carrera en el hockey. El palo de hockey Blast tiene un mango de gamuza de color que hace que usar el palo sea una experiencia cómoda.", "https://hockeygear.com.ar/wp-content/uploads/2021/07/Stick-AC10-Probow-S-Apex-23096_Hoofd.jpeg");


INSERT INTO `productos`(users_id, nombre, descripcion, image) 
VALUES (3, "Canilleras malik", "Conocé las Canilleras Malik Club 8 Protección, ideales para cuidarte en cada enfrentamiento con el oponente. Diseñadas en una estructura curva y anatómica que se adapta a las piernas perfecta y cómodamente, tienen un ajuste de correas para facilitar el poner y sacar", "https://http2.mlstatic.com/D_NQ_NP_925884-MLA49402675553_032022-O.webp");



INSERT INTO `productos`(users_id, nombre, descripcion, image) 
VALUES (4,"Protector bucal Gilbert","Minimizá el riesgo de lesiones con el Protector bucal Gilbert Viper Pro 3. Su simplicidad en el diseño permite una perfecta adaptación a cada tipo de dentadura, impidiendo los golpes y reduciendo las vibraciones para mayor cuidado en el campo de juego.", "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/3/4/340040000400019-1.jpg");


INSERT INTO `productos`(users_id, nombre, descripcion, image) 
VALUES (5,"Funda TK","La imbatible TK 3.3 ofrece una solución efectiva en todos los entornos, con un compartimiento para palo, 2 compartimientos frontales separados, y una única tira trasera.", "https://tkhockey.com.ar/wp-content/uploads/2020/09/New-3.31-GREEN-AF_result.jpg");


INSERT INTO `productos`(users_id, nombre, descripcion, image) 
VALUES (6,"Cubre canilleras","Protegen la piel del roce generado por la canillera durante el entrenamineto y partido. Ofrecen una buena elasticidad y una leve compresion.", "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/030/995/products/whatsapp-image-2020-09-02-at-22-01-421-b97de0a0ab7696ad7615991405284173-1024-1024.jpeg");


INSERT INTO `productos`(users_id, nombre, descripcion, image) 
VALUES (3,"Tartaneras addidas","Es un botín clásico, tradicional en su perfil de cosmética, ampliamente testeado en calidad y duración. Está realizado en materiales sintéticos sin costuras y con detalles de alta frecuencia, lo que hace liviano y cómodo.", "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/276/610/products/21-d9d8812a2c50adabf116256817361636-640-0.png");



INSERT INTO `productos`(users_id, nombre, descripcion, image) 
VALUES (1,"Bocha de hockey Drial","Bochas profesionales, estructura confeccionada en una sola pieza hueca, 0% absorción de agua y humedad.", "https://d3ugyf2ht6aenh.cloudfront.net/stores/002/458/854/products/bochadrialnaranja-10241-525d2912461569faeb16723197119669-1024-1024.jpg");


INSERT INTO `productos`(users_id, nombre, descripcion, image) 
VALUES (1,"Guante Vlack","De la línea de guantes Brabo, el F5 es un guante confeccionado en tela y con protecciones de plástico moldeado. Es abierto, lo cual brinda mucha comodidad al jugador para que pueda seguir sintiendo el mango del palo con la palma de la mano.", "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/689/943/products/guante-bufago-celeste1-3bd85fb1af578ed17e16227466899946-1024-1024.jpg");


INSERT INTO `productos`(users_id, nombre, descripcion, image) 
VALUES (3,"Guante Drial de arqueros","Fabricado con goma spum de alta densidad, con terminaciones de calidad. Todos nuestros productos poseen 90 días de garantía por defectos de fabricación, desde la fecha de compra.", "https://http2.mlstatic.com/D_NQ_NP_637483-MLA40533403715_012020-O.webp");


INSERT INTO `productos`(users_id, nombre, descripcion, image) 
VALUES (4,"Palo balling","El nuevo Alpha 100 Xtreme Groove Lowbow fue diseñado para arrastradores en busca de sumar potencia a sus tiros y progresar en sus habilidades aereas.", "https://cdn.shopify.com/s/files/1/0379/2873/0668/products/Ball-WEB-AlphaLate-Slide1_1200x1800_b57b6016-b1dc-44f4-90e4-75b5bc06e3bc_grande.jpg?v=1647620511");

