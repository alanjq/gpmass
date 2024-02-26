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
VALUES (NULL, 'Bienvenido a mi blog', CURRENT_TIMESTAMP, 'Esta es la primera entrada del blog.', 'alan'),
       (NULL, 'Publicación dos', CURRENT_TIMESTAMP, 'Esta es la segunda entrada del blog, no aporta información útil.', 'alan')
