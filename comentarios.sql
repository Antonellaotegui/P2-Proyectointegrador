CREATE TABLE `comentarios`(
id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
users_id INT UNSIGNED NOT NULL,
producto_id INT UNSIGNED NOT NULL,
comentario TEXT NOT NULL,
created_at timestamp default current_timestamp,
updated_at timestamp default current_timestamp on update current_timestamp,
deleted_at timestamp null,
CONSTRAINT `fk_kiosko_users`FOREIGN KEY (`users_id`) REFERENCES users(id),
CONSTRAINT `fk_kiosko_producto`FOREIGN KEY (`producto_id`) REFERENCES productos(id)
);



-- para que aparezca algun registro
/*USE `stick`;
INSERT INTO  `comentarios` (users_id, producto_id, comentario) VALUES (
1, 1, 'Muy buen material'
);

USE `stick`;
INSERT INTO  `comentarios` (users_id, producto_id, comentario) VALUES (
3, 4, 'Me duro un solo año'
);

USE `stick`;
INSERT INTO  `comentarios` (users_id, producto_id, comentario) VALUES (
4, 5, 'Muy lindas'
);

USE `stick`;
INSERT INTO  `comentarios` (users_id, producto_id, comentario) VALUES (
5, 6, 'Muy practico'
);

USE `stick`;
INSERT INTO  `comentarios` (users_id, producto_id, comentario) VALUES (
6, 7, 'Recomendado'
);*/





