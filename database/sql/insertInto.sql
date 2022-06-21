INSERT INTO users (email, username, password, date, dni, image, createdAt)
VALUES 
("fedefullone@hotmail.com", "fedefullone", "gomez2008", "2002-01-08", "44298765", "/images/users/fede.jpeg", curdate()),
("martinez@hotmail.com", "bmartinez", "gomez2007", "2003-03-01","44298764","/images/users/bauti.webp", curdate()),
("sherrerasendes@hotmail.com", "sherrera", "santiagoxd", "2002-02-14","44298769","/images/users/santi.jpeg", curdate());

INSERT INTO products (marca, modelo, descripcion, createdAt, FkUserId, image, color)
VALUES
("Jordan","1 Retro Low OG SP","Travis Scott agrega otro nuevo diseño a su relación de colaboración con Jumpman a través del Air Jordan 1 Low ",1, curdate(),"retro.jpeg","Georgetown"),
("Nike","Dunk Low Retro","Desde el College Colors Program con espíritu escolar hasta la vibrante colección Nike",curdate(),"panda.jpeg",3,"White Black"),
("Adidas","Yeezy Boost 350 V2","El adidas Yeezy Boost 350 V2 de color luminoso tiene una parte superior de color blanco crema",curdate(),1,"yeezy.png","Triple White"),
("Nike","Dunk Low","El Nike Dunk Low Championship Purple presenta una parte superior de cuero blanco con superposiciones Championship Purple y Swooshes",curdate(),2,"dunk.png",1,"Championship Court Purple"),
("Jordan","1 Retro High","Jordan Brand rinde homenaje al lugar donde comenzó el legado con Jordan 1 Retro High Bloodline",curdate(),3,"retrohigh.png","Bloodline"),
("Jordan","4 Retro","Lanzado originalmente en 2006, el Air Jordan 4 Retro Lightning (2021) es una de las combinaciones de colores retro Jordan 4 más reconocidas en el catálogo de la marca Jordan",curdate(),1,"retro4.png","Lightning"),
("Adidas","Yeezy Foam RNNR","El adidas Yeezy Foam RNNR Ochre presenta una construcción de espuma EVA de una sola pieza Ochre dorado",curdate(),2,"foam.png","Ochre"),
("Adidas","Yeezy 450","Con una construcción simplificada de dos piezas, el adidas Yeezy 450 Dark Slate presenta una suela de espuma Dark Slate que se ajusta a una parte superior Primeknit monocromática similar a un calcetín",curdate(),2,"450.png","Dark Slate"),
("Nike","Dunk","Las Nike Dunk Low Laser Orange (W) para mujer llegan con una parte superior de cuero blanco y revestimientos Laser Orange",curdate(),3,"dunkamarillas.png","Laser Orange"),
("Nike","SB Dunk Low","Travis Scott se asoció con Nike SB para lanzar su primer calzado de skate oficial",curdate(),2,"travis.png","Travis Scott"),
("Nike","SB Blazer Mid","Las famosas Blazer, renovadas",curdate(),1,"blazer.png","Isle Skateboards"),
("Umbro","F5 Model 1","Tanto como para un partido como para ir al colegio",curdate(),2,"umbro.png","Black School");

INSERT INTO comments (comentario,FkProductId,FkUserId,createdAt)
VALUES
("Muy buenas zapatillas! Buena calidad.", 2, 3, curdate())
("Esperaba mejor calidad", 12, 2, curdate())
("Mis zapatillas favoritas", 8, 1, curdate())




