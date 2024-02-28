-- Table Blog Post
CREATE TABLE `blog_post` (
    id INT(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(80)  NOT NULL,
    published TIMESTAMP  NOT NULL  DEFAULT CURRENT_TIMESTAMP,
    article text NOT NULL,
    author VARCHAR(25)  NOT NULL
);

-- Insert two demo records
INSERT INTO `blog_post` (`id`, `title`, `published`, `article`, `author`)
VALUES (NULL, 'Bienvenido a mi blog', CURRENT_TIMESTAMP, 'Cras eget felis maximus, sagittis ex in, bibendum magna. Nam sodales sem ut lectus elementum, at mattis sem laoreet. Nulla facilisi. Ut commodo ligula est, non congue sapien tincidunt eu. Cras at auctor sem, et condimentum diam. Suspendisse vitae mattis arcu. Integer nec lectus in odio consectetur ultrices in sed sem.', 'alan'),
       (NULL, 'Publicación dos', CURRENT_TIMESTAMP, 'Nulla feugiat turpis vehicula sapien lobortis, quis consectetur leo porta. Pellentesque egestas mollis ipsum a eleifend. Morbi iaculis mattis turpis, at vestibulum eros scelerisque sit amet. Pellentesque vestibulum augue vel ex consectetur elementum vitae in ipsum. Fusce eros augue, tristique vel venenatis vel, tincidunt in augue. Aliquam diam massa, auctor in eleifend a, sodales nec eros. Sed pellentesque lacus vel malesuada rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', 'alan')
